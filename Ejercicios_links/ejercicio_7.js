// 7. Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

const lista = [4, 5, 8, 11, 11];
let arraynuevo = [];

let Mapa = (num) => {
  return num % 3 === 0;
};

let resultado = lista.find(Mapa);

console.log(resultado);