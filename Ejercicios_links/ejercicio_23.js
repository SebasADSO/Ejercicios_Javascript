// 23. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.

let JsonFile = 'prueba.json';

async function llamada(file) {
  try {
    let reponse = await fetch(file)
    if (reponse.ok) {
      let reponsedata = await reponse.json()
      console.log(`Archivo encontrado ${file}`)
    }
    else {
      throw new Error("Archivo no encontrado "+reponse.status)
    }
  } catch (error) {
    console.log(error)
  }
}
llamada(JsonFile)