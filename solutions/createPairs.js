/*
Entrada: Arreglo de elementos 
Salida: imprimir parejas


 funcion nombre (arreglo)
    Mientras longitud de arreglo sea mayor que 1
        funcion A que seleccione un posición aleatoria y  obtenga el valor eliminandolo del arreglo original.
        imprima ([funcion A, funcion A])
        si la longitud del arreglo es igual a 1
            imprimir el arreglo
    imprimir (arreglo) 
//
*/
function createPairs(array) {
    while (array.length>1) {
        console.log([array.splice(Math.floor(Math.random()*array.length),1)[0], array.splice(Math.floor(Math.random()*array.length),1)[0]])
        if (array.length===1) {
            console.log(array)
        }
    }    
}

createPairs([ "Maria", "Pedro", "Mauricio", "Eustaquio", "Vladimir", "Renan", "Pompilio", "Domingo"])

// Calculo de la complejidad
// la funcion splice/floor/random solo hace una operación por lo que su complejidad es constante de O(1)
// While se repite n/2 por lo que su complejidad es O(1/2n)
// if solo hace una operación su complejidad es constante O(1)
// la complejidad del algoritmo total es O(n) despreciando la constante 1/2
