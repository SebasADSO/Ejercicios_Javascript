// 25. Usar un proxy para la validación de los valores de propiedades
// • Cuando declaremos que el atributo es numérico solo permitimos que ingresen
// números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
// letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
// correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
// fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola

const TIPO_NUMERICO = 'numerico';
const TIPO_ALFANUMERICO = 'alfanumerico';
const TIPO_EMAIL = 'email';
const TIPO_FECHA = 'fecha';

const mensajesError = {
  numerico: 'El valor debe ser un número.',
  alfanumerico: 'El valor debe contener solo letras y números.',
  email: 'El valor no es un correo electrónico válido.',
  fecha: 'El valor no es una fecha válida.',
  espacios: 'No se permiten espacios en blanco al inicio o al final.',
};

const validador = {
  get(target, prop, receiver) {
    if (prop in target.propiedadesValidadas) {
      const { tipo, mensaje } = target.propiedadesValidadas[prop];
      const valor = Reflect.get(target, prop, receiver);
      if (!validarValor(valor, tipo)) {
        console.error(mensaje);
        return undefined;
      }
      return valor.trim();
    }
    set(target, prop, value, receiver); {
      if (prop in target.propiedadesValidadas) {
        const { tipo, mensaje } = target.propiedadesValidadas[prop];
        if (!validarValor(value, tipo)) {
          console.error(mensaje);
          return false;
        }
      }
      return Reflect.set(target, prop, value, receiver)
    }
  }
};

  function validarValor(valor, tipo) {
    switch (tipo) {
      case TIPO_NUMERICO:
        return !isNaN(valor) && isFinite(valor);
      case TIPO_ALFANUMERICO:
        return /^[a-zA-Z0-9]+$/.test(valor);
      case TIPO_EMAIL:
        return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valor);
      case TIPO_FECHA:
        return new Date(valor) instanceof Date;
      default:
        return true;
  }
}
  
class ObjetoValidado {
  constructor(propiedadesValidadas) {
    this.propiedadesValidadas = propiedadesValidadas;
    this.target = {};
    return new Proxy(this.target, validador);
  }
  setPropiedad(propiedad, valor) {
    this.target[propiedad] = valor;
  }
  getPropiedad(propiedad) {
    return this.target[propiedad];
  }
}

const usuario = new ObjetoValidado({
  nombre: { tipo: TIPO_ALFANUMERICO },
  edad: { tipo: TIPO_NUMERICO },
  correo: { tipo: TIPO_EMAIL },
  fechaNacimiento: {
    tipo: TIPO_FECHA
  },
 }
);

usuario.setPropiedad('nombre', 'Juan Pérez');
usuario.setPropiedad('edad', '30');
usuario.setPropiedad('correo', 'juan.perez@example.com');
usuario.setPropiedad('fechaNacimiento', '2000-01-01');
console.log(usuario.getPropiedad('nombre'));
console.log(usuario.getPropiedad('edad'));
console.log(usuario.getPropiedad('correo'));
console.log(usuario.getPropiedad('fechaNacimiento'));