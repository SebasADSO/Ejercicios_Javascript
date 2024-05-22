// 11. ¿Cuál es el resultado del código a continuación?

console.log("Lanazara una alerta que dara el mensaje 100000000, esto debido a que no se lanzara la alerta hasta que el indice alla sido definido al terminar el bucle for");
let i = 0;

setTimeout(() => alert(i), 100);

for (let j = 0; j < 100000000; j++) {
  i++;
  
}