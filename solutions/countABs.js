/*  Pseudocodigo
 *
 *  Entrada: un string con letras
 *  Salida: Retornar un objeto con las veces que se repite el caracter a y el b en el string de
 *  entrada
 *
 *  Instrucciones:
 *    - mientras que i sea menor que la longitud del string entonces
 *        * definir una variable "char" que sera igual al caracter del string en la posicion "i"
 *        * buscar la cantidad de veces que se repite el caracter "a" en char en el string y el
 *        caracter "b"
 *    - Retornar el resultado en un objeto que lleve como llave los caracteres a y b, y las veces
 *    que se repiten en el string
 */

var countABs = function(string) {
  for (var i=0; i < string.length; i++) {
    var char = string[i];
    var number_of_a = find_char(string, "a")
    var number_of_b = find_char(string, "b")
  }
  return { a: number_of_a, b: number_of_b }
}

var find_char = function(string, char){ 
  return (string.split(char).length - 1)
}

console.log(countABs("zxy"))
console.log(countABs("aaabbb"))
console.log(countABs("abc"))
