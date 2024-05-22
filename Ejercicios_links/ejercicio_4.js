// 4. Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".

const lista = [1, 2, 3, 4, 5];
let arraynuevo = [];

let Mapa = (num) => num % 2 === 0;

let resultado = lista.filter(Mapa);

arraynuevo.push(...resultado);

console.table(arraynuevo);