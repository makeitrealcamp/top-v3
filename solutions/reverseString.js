/*
Entrada = arreglo de caracteres
La función invierte el orden de los caracteres del arreglo
Instrucciones
definir char
definir i=0
mientras i<longitud del arreglo/2
    char=caracter i
    caracter i = caracter longitud del arreglo -i
    caracter longitud del arreglo -i = char
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let char;
    for(let i=0;i<(s.length/2);i++){
         char = s[i];
         s[i] = s[s.length-i-1];
         s[s.length-i-1] = char;
     }
 };