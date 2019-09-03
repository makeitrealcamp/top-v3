/*
Entrada: Un string (str).

Salida: El mismo string (str) pero sin mayúsculas sin usar el metodo toLowerCase.

Instrucciones:
1. Crear una función toLowerCase que reciba un string (str).
2. Crear una variable (result) en el cual se guarde el resultado.
3. Comparar si el codigo de caracteres pertenece al de los caracteres en minuscula.
4. Reemplazar el caracter por el indicado en minuscula.

*/

var toLowerCase = function(str) {
  var result = ''
  for (var i = 0; i < str.length; i++) {
  	var code = str.charCodeAt(i)
    if (code > 64 && code < 91) {
      result += String.fromCharCode(code + 32)
    } else {
      result += str.charAt(i)
    }
  }
  return result
};

console.log(toLowerCase("LOVELY"))
