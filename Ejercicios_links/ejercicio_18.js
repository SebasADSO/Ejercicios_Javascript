// 18. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios(por ejemplo,
//   mostrar solo los nombres que comiencen con "A").

fetch('prueba.json')
  .then(response => response.json())
  .then(data => {
    const filteredData = data.filter(item => item.name.startsWith('A'));
    console.log(filteredData);
  })
  .catch(error => console.error('Error:', error));