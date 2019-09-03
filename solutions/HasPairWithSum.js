/* Pseudocodigo
 *
 * Entrada: un arreglo de numeros y una numero
 * Salida: Un booleando
 *
 *  Instrucciones:
 *    - Crear una variable de un arreglo vacio
 *    - Mientras i sea menor a la longitud del arreglo entonces
 *        * Si en el arreglo complemento se encuentra el valor de la resta de la entrada "sum" menos
 *        el valor del arreglo en la posicion i, se retornara true.
 *        * Si no es así se agragara el valor del arreglo en la posicion i al arreglo complemento
 *    - Si no se retorna true, se retornara false ya que no se encontro solucion
 */

var hasPairWithSum = function(array, sum) {
  var complement = []
  for ( i = 0; i < array.length; i++ ) {
    if (complement.includes(sum - array[i])) {
      return true
    }
    complement.push(array[i])
  }
  return false
}

console.log(hasPairWithSum([5,4,3], 8))
