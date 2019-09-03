// https://leetcode.com/problems/reverse-string/


// Entrada un arreglo de cácteres
// Salida un arreglo con los caracteres en orden invertido
// Se transforma el arreglo en un nuevo string
// Se redefine el arreglo ([''])
// Recorremos el string de fin a inicio y escribimos el carácter en el arreglo
// Retornamos el arreglo

function reverseString(char) {
    str = char.join('')
    char = []
    for (let i = str.length - 1; i >= 0; i--) {
        char.push(str[i])
    }
    return char
}

console.log(ReverseString(["H", "a", "n", "n", "a", "h"]))