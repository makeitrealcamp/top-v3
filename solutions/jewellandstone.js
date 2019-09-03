/*  Pseudocodigo
 *
 *  Entrada: recibe un dos strings
 *  Salida: Retornar el total de veces que se repite cada caracter del primer string en el segundo
 *  string
 *
 *  Instrucciones:
 *    - definir una variable "total" que sera igual 0
 *    - mientras que i sea menor que la longitud del string entonces
 *        * definir una variable "char" que sera igual al caracter del string "S" en la posicion "i"
 *        * si se repite el caracter char en el string J entonces
 *            + sumar 1 al total
 *    - Retornar el total
 */

https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function(J, S) {
  var total = 0;
  for (var i=0; i < S.length; i++) {
    var char = S[i];
    if (J.indexOf(char) != -1) {
      total++
    }
  }
  return total
};

console.log(numJewelsInStones("zJZ", "zzZ"));
console.log(numJewelsInStones("aA", "aAAbbbb"))
