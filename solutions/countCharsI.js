// Count Chars I

// Write a function called `countABs` that receives a string and returns an
// object with the number of **a's** and the number of **b's**.

////////// Pseudocodigo //////////
//
// Entrada: una cadena de texto
// Salida: un objeto que muestra cuantas "a" y "b" hay en la cadena de entrada
//
// definir ca y cb y hacerla igual a cero
// para cada caracter en la cadena hacer:
//   si el caracter es una "a" aumentar en uno ca
//   en caso contrario si el caracter es una "b" aumentar en uno cb
// definir un objeto donde sus elementos son "a" = ca y "b" = cb
// retornar objeto

// Complejidad: O(n)

function countABs(str) {
  var ca = 0;
  var cb = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] === "a") {
      ca++;
    } else if(str[i] === "b") {
      cb++;
    }
  }
  var objeto = {a: ca, b: cb}
  return objeto;
}

console.log(countABs("aaabbb")); // { a: 3, b: 3 }
console.log(countABs("abc")); // { a: 1, b: 1 }
console.log(countABs("zxy")); // { a: 0, b: 0 }
