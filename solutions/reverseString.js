/*  Pseudocodigo
 *
 *  Entrada: un arreglo de caracteres que formen una palabra
 *  Salida: Retornar un arreglo en el que esten todos los caracteres en sentido contrario al del
 *  arreglo de entrada
 *
 *  Instrucciones:
 *    - mientras que i sea menor que a la mitad de la longitud del string entonces
 *        * definir una variable "current_number" que sera igual al caracter del string en la posicion "i"
 *        * darle el valor de la ultima posicion del arreglo a la primera posicion del arreglo 
 *        * hacer el mismo proceso hasta llegar a la mitad del arreglo
 *    - Retornar el resultado
 */

https://leetcode.com/problems/reverse-string/

var reverseString = function(arr) {
  for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
      var current_number = arr[i]
      arr[i] = arr[arr.length - 1 - i]
      arr[arr.length - 1 - i] = current_number
  }
  return arr;
}

console.log(reverseString(["a", "b", "c"]))
console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))
