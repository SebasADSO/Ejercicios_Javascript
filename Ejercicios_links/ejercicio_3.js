// 3. Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.

const lista = [1, 2, 3, 4, 5];
let arraynuevo = [];

let Mapa = (num) => num * 2;

let resultado = lista.map(Mapa);

arraynuevo.push(...resultado);

console.table(arraynuevo);