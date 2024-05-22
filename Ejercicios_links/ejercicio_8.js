// 8. Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined

const lista = [2, 1, 0, 11, -9999];

let Mapa = (num) => {
  return num > 3;
};

let resultado = lista.findIndex(Mapa);

console.log(resultado);
