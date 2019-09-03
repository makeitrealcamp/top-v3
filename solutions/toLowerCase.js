/*  Pseudocodigo
 *
 *  Entrada: Un string con letras en maysucula
 *  Salida: Un string sin ningun letra en mayuscula
 *  Instrucciones:
 *    - Definir una variable "result" que sera un string vacio
 *    - mientras que i sea menor que longitud entonces
 *        * definir una variable "char" con codigo ascii de la letra del string en la posicion i
 *        * si este codigo es un codigo de letras en mayuscula
 *            + buscar el codigo de esta letra en minuscula y agragarla a la variable result
 *        * si no
 *            + agregar la misma letra al string 
 *
 *    - Retornar result
 *
 */

https://leetcode.com/problems/to-lower-case/

var toLowerCase = function(string) {
  var result = ""

  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i)

    if (code > 64 && code < 91) {
      result += String.fromCharCode(code + 32)
    } else {
      result += string[i]
    }
  }

  return result
}

console.log(toLowerCase("asdASD"))
