// 21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen.Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve(("Hola"), 3000))
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Mundo"), 100000))
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve(("..."), 10000))
});

Promise.allSettled([promise1, promise2, promise3]).then(() => {
  console.log(promise1,promise2,promise3)
})