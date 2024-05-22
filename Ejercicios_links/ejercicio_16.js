// 16. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente.Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve((1), 3000))
});
promise1.then();

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve((2), 3000))
});
promise2.then();

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve((3), 3000))
});
promise3.then();

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values)
  console.log(values.reduce((num, total)=>total+num))
})