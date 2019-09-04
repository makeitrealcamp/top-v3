////////// Pseudocodigo //////////
//
// Entrada: una cadena de texto
// Salida: una cadena de texto con todos sus caracteres en minuscula
//
// definir s = ""
// para cada caracter de la cadena hacer:
//   definir codigo = codigo ascii
//   si codigo está entre 65 y 91:
//    sumar a codigo 32
//   concatenar a s la letra que resulta del nuevo valor de codigo
// retonar la cadena s

// Complejidad: O(n) se necesitan str.length pasos en el peor de los casos para
// encontra la letra mayúscula.

 // No utilices el método `toLowerCase` de JavaScript.
var toLowerCase = function(str) {
  var s = "";
  for (var i = 0; i < str.length; i++) {
    var codigo = str.charCodeAt(i);
    if (codigo >= 65 && codigo < 91) {
      codigo += 32;
    }
    s += String.fromCharCode(codigo);
  }
  return str + " => " + s;
};

console.log(toLowerCase("HelLo"));
console.log(toLowerCase("HelLo WORLd"));
