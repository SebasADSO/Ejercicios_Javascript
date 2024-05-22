// 20. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.
async function llamar() {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve(("Hola"), 3000))
  });

  const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve(("Mundo"), 100000))
  });

  const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve(("..."), 10000))
  });
  
  let result = Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values)
  })
}
llamar();