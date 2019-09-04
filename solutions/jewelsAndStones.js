// https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
////////// Pseudocodigo //////////
//
// Entrada: dos cadenas de texto
// Salida: número de joyas
//
// definir un contador a cero
// para la segunda cadena de entrada:
//   comparar cada uno de sus caracteres en la primera cadena y aumentar en uno
//   el contador cada vez que hayan coincidencias
// retornar el numero de coincidencias.

// Complejidad: O(n)

var numJewelsInStones = function(J, S) {
  var total = 0;
  for(var i = 0; i < S.length; i++) {
    var char = S[i];
    if(J.indexOf(char) > -1) {
      total++;
    }
  }
  return total;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
