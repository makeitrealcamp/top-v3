// # Count Chars II
//
// Write a function called `frequencies` that receives a string and returns an
// object with the number of times each character appears in the string (except the blank space).

////////// Pseudocodigo //////////
//
// Entrada: Cadena de texto
// Salida: Objeto con el número de veces que cada caracter aparece en la cadena
//
// eliminar los espacios en blanco de la cadena de texto
// definir dos arreglos vacíos y un objeto
//
// recorrer la cadena de texto:
//   guardar los caracteres de la cadena, sin repetir, en un arreglo
//
// recorrer el nuevo arreglo:
//   contar el número de veces que se repiten los elementos del nuevo arreglo en la
//   cadena de texto y guardar ese resultado en otro arreglo
//   agregar al objeto como llave los elementos del primer arreglo y como valor los
//   números guardados en el segundo arreglo.
// retornar el objeto

// Complejidad: por sus dos ciclos anidados entonces es O(n²)


function countCharsII(str) {
  str = str.replace(/\s/g, '');
  var arr = [];
  var chars = [];
  var objeto = {};
  for(var i = 0; i < str.length; i++) {
    if(!chars.includes(str[i])) {
      chars.push(str[i]);
    }
  }

  for(var i = 0; i < chars.length; i++) {
    var pos = str.indexOf(chars[i])
    var cont = 0;

    while (pos != -1) {
      cont++;
      pos = str.indexOf(chars[i], pos + 1);
    }
    arr.push(cont);
    objeto[chars[i]] = cont;

  }
  return objeto;
}
console.log(countCharsII("Hola mundo"));
console.log(countCharsII("Anita lava la tina"));
