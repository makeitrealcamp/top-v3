/*  Pseudocodigo
 *
 *  Entrada: Dos strings con nombres
 *  Salida: Retorna un string con la concatenacion de las letras repetidas entre los dos strings
 *
 *  Instrucciones:
 *    - Definir una variable "result" que sera un string vacio
 *    - mientras que i sea menor que longitud entonces
 *        * definir una variable "char" que sera igual al caracter del primer string en la posicion "i"
 *        * si este caracter se encuentra en el segundo string entonces 
 *            + agregar a result el caracter que se encontro
 *
 *    - Retornar result
 *
 */

var repeatedChars = function(str1, str2){
  result = ""
 
  for (var i=0; i < str1.length; i++) {
    var char = str1[i];
    if (str2.indexOf(char) != -1) {
      result = result + char
    }
  }

  return result
}

console.log(repeatedChars("german", "gabriela"))
console.log(repeatedChars("valentina", "esteban"))
