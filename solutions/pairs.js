////////// Pseudocodigo //////////
//
// entrada: arreglo de elementos.
// salida: lista de parejas.
//
// definir m, n;
// i = tamaño del arreglo
// mientras i > 0 :
//   si i = 1
//     imprima posición
//   si no
//     m = numero aleatorio entre 0 y el tamaño del arreglo;
//     n = numero aleatorio entre 0 y el tamaño del arreglo;
//     si m !== n y m > n
//       imprimir esas dos posiciones
//       borrar los valores de esas posiciones
//       i = tamaño del nuevo arreglo

// Complejidad: a pesar de tener dos splice es O(n)

function pairs(arr) {
  var m;
  var n;
  var i = arr.length;
  while (i > 0) {
    if (i === 1) {
      console.log(arr[0]);
      i = 0;
    } else {
      m = Math.floor((Math.random() * arr.length - 1) + 1);
      n = Math.floor((Math.random() * arr.length - 1) + 1);
      if (m !== n && m > n) {
        console.log(arr[m] + " - " + arr[n]);
        arr.splice(m, 1);
        arr.splice(n, 1);
        i = arr.length;
      }
    }
  }
}

pairs(["Jose", "Daniel", "Anderson", "German", "Martin", "Julian", "Juliana"]);
pairs(["a", "b", "c", "d"]);
