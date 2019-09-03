/*
Entrada: Arreglo de elementos de tipo String con nombres en el.

Salida: Imprimir arreglos de personas de manera aleatoria y sin repertir nombres, Si el arreglo tiene un
número de elementos impar, imprime el ultimo arreglo con el nombre restante.

Instrucciones:

1. Crear una función createPairs que reciba como argumento un arreglo (array).
2. Mientras la longitud del arreglo sea mayor que uno.
  2.1. Imprimir un arreglo con dos elementos que son sustraídos aleatoriamente del arreglo original.
3. Si la longitud del arreglo es igual a 1, imprimir el elemento restante.

*/

function createPairs(array) {
   while (array.length>1) {
       console.log([array.splice(Math.floor(Math.random()*array.length),1)[0], array.splice(Math.floor(Math.random()*array.length),1)[0]])
   }
   console.log(array)
}
createPairs([ "Maria", "Pedro", "Mauricio", "Eustaquio", "Vladimir", "Renan", "Pompilio", "Domingo", "Circuncición"])

/* La Complejidad de esta función es del tipo lineal donde el el numero de operaciones n depende de la longitud total
del arreglo donde para los casos donde la longitud de elementos es par el n seria igual a la mitad de los elementos
y si la longitud es impar el n seria el numero entero inmediatamente arriba de la mitad de los elementos
 */
