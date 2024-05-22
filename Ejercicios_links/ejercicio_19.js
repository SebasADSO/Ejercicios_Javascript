// 19. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.

async function procesarDatosJSON(archivoJSON, criterio) {
    const respuesta = await fetch(archivoJSON);
    const datos = await respuesta.json();
    const datosFiltrados = datos.filter(item => item.name.startsWith(criterio));

    console.log(datosFiltrados);
}
procesarDatosJSON('prueba.json', "A")