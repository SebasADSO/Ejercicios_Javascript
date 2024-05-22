// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true

const lista = [3, 6, 9, 12, 15];
let arraynuevo = [];

let Mapa = (num) => {
  return num % 3 === 0;
};

let resultado = lista.every(Mapa);

console.log(resultado);