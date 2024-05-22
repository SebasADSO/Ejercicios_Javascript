// 6. Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

const lista = [4, 5, 8, 12, 11];
let arraynuevo = [];

let Mapa = (num) => {
  return num % 3 === 0;
};

let resultado = lista.some(Mapa);

console.log(resultado);