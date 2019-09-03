/*  Pseudocodigo
 *
 *  Entrada: un arreglo de string
 *  Salida: Retornar un objeto con cada caracter del string y la cantidad de veces que se repite
 *
 *  Instrucciones:
 *    - Eliminar los caracteres vacios o espacios del string de entrada
 *    - Definir una variable "result" que sea un objeto
 *    - mientras que i sea menor que la longitud del string entonces
 *        * definir una variable "char" que sera igual al caracter del string en la posicion "i"
 *        * buscar la cantidad de veces que se repite el caracter almacenado en char en el string
 *        * almacenar en la variable result un nuevo objeto que tenga como llave la letra actual, y
 *        como valo la cantidad de veces que se repite
 *    - Retornar el resultado
 */


var frequencies = function(string) {
  str = string.replace( /\s/g, '')
  var result = {}
  for (var i=0; i < str.length; i++) {
    var char = str[i];
    var number_of_char = find_char(str, char)
    result[char] = number_of_char
  }
  return result
}

var find_char = function(string, char){ 
  return (string.split(char).length - 1)
}

console.log(frequencies("hola mundo"))
console.log(frequencies("anita lava la tina"))
