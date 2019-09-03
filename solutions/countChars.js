/*
Write a function called countABs that receives a string and returns
an object with the number of a's and the number of b's.
*/

// Se tiene un String de entrada
// Salida: Un arreglo con la cantidad de A's y B's q tiene el string
// Se define el objeto con los contadores de A y B en 0
// Se recorre el String
    // Si el caracter es una 'a' o una 'b' se suma uno al contador correspondiente
// Se retorna el Objeto


function countABs(str) {
    obj = {
        a: 0,
        b: 0
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            obj.a += 1
        }
        if (str[i] === 'b') {
            obj.b += 1
        }
    }
    return obj
}
countABs("aaabbb"); // { a: 3, b: 3 }