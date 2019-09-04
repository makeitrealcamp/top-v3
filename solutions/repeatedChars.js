// Repeated Characters

// Write a function called `repeatedChars` that receives two strings and returns
// a new string with the characters that are repeated in both input strings:

////////// Pseudocodigo //////////
// Entrada: dos strings
// Salida: los caracteres en comun de los strings
//
// se define string aux vacío;
// Para el primer string comparar sus caracteres con cada uno del segundo string
// hasta que encuentre uno igual:
//  si el caracter del primer string también está en el segundo string se pregunta:
//    si la nueva cadena no contiene el caracter en comun:
//      se concatena al string aux;
// Retornar el string resultante;

// Complejidad: O(n)

function repeatedChars(s, t) {
  var aux = "";
  for(var i = 0; i < s.length; i++) {
    if(t.includes(s[i])) {
      if(!aux.includes(s[i])) {
          aux += s[i];
      }
    }
  }
  return aux;
}

console.log(repeatedChars("german", "gabriela"));
