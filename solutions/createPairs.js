/*  Pseudocodigo
 *
 *  Entrada: un arreglo de string
 *  Salida: Imprimir parejas de string aleatoriamente
 *
 *  Instrucciones:
 *    - Definir una variable "i" igual a 0
 *    - Definir una variable "longitud" igual a la cantidad de objetos que tenga el arreglo de entrada
 *    - mientras que i sea menor que longitud entonces
 *        si hay 2 o mas posiciones en el arreglo
   *        Definir una variable "aleatorio_1" que tome el objeto en la posicion de un numero aleatorio que sea menor a la longitud del arreglo
   *        eliminar dicha posicion del arreglo
   *        Definir otra variable "aleatorio_2 que tome otro objeto del arreglo en una posicion
   *        aleatoria que sea menos a la longitud del arreglo
   *        eliminar dicha posicion del arreglo principal
   *        imprimir la posicion
   *      si no
   *        imprimir la posicion restante  
   *      aumentar en 2 i
 *
 */

var createPairs = function(array) {
  var i = 0
  var longitud = array.length

  while (i < longitud) {
    if (i + 1 < longitud) {
      var aleatorio_1 = array.splice(Math.floor(Math.random() * array.length), 1)
      var aleatorio_2 = array.splice(Math.floor(Math.random() * array.length), 1)
      
      console.log(aleatorio_1 + " - " + aleatorio_2)
    } else {
      console.log(array.pop())
    }

    i += 2
  }
}


createPairs(["German", "Alveiro", "Orlando", "Valentina", "Esteban", "Maritza"])
