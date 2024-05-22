// 10. Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// • (Inverso del dropWhile)

const lista = [2, 1, 0, 11, -9999];

let Mapa = (num) => num % 2 === 0;

let resultado = _.takeWhile(lista, Mapa);

console.log(resultado);