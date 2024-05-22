// 15. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error ("Promise rechazada"), 2000))
});
promise.catch();