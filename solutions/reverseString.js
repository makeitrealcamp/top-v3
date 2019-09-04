// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
////////// Pseudocodigo //////////
//
// Entrada: un string
// Salida: string ordenado al reves
//
// definir temp = 0
// definir j = tamaño del string de entrada
// para la primera mitad de los caracteres del string hacer:
//   temp = primer caracter del string
//   primer caracter = ultimo caracter
//   ultimo caracter = temp
// retornar el string modificado

// Complejidad: O(n)

var reverseString = function(s) {
  var temp = 0;
  var j = s.length - 1;
  for(var i = 0; i < j/2; i++) {
    temp = s[i];
    s[i] = s[j - i];
    s[j - i] = temp;
  }
  console.log(s);
};

reverseString(["D","a","n","i","e","l"]);
