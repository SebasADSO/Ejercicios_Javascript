// 1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.

// console.log("Programa iniciado setInterval: contando del 1 al 10")

// function imprimirNumeros(desde, hasta) {
//     let contador = setInterval(() => {
//       console.log(desde++)
//       if (desde > hasta) {
//         clearInterval(contador)
//         console.log("Programa finalizado")
//       }
//     }, 1000); 
//   }

// imprimirNumeros(1, 10)

console.log("Programa iniciado setTimeout: contando del 1 al 10")

function imprimirNumeros2(desde, hasta) {
  setTimeout(function contandor() {
    console.log(desde)
    if (desde < hasta) {
      setTimeout(contandor, 1000)
    }
    else {
      console.log("Programa finalizado")
    }
    desde++
  }, 1000);

}
imprimirNumeros2(1, 10)
