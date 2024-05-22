// 22. Crea un bucle que realice llamadas asincrónicas utilizando async / await para procesar una
// lista de elementos uno por uno.

let listatest = [1 ,2 ,3];

async function procesar(elemento) {
  console.log(`Resultado para: ${elemento}`)
}

async function procesarlista(lista) {
  for (const elemento of lista) {
    await procesar(elemento)
  }
}

procesarlista(listatest)