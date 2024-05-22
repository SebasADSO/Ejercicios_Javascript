// 14. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada".Utiliza async / await.

function asincrónica() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("completada")
    }, 2000);
  })
}

async function llamar() {
  const xd = await asincrónica()
  console.log("Operación "+xd)
}

llamar();