/*# Repeated Characters

Write a function called `repeatedChars` that receives two strings and returns a new string with the characters that are repeated in both input strings:

```javascript
repeatedChars("german", "gabriela"); // "gear"
```
*/
/* Pseudocodigo
Entrada: dos cadenas de caracteres
Salida: caracteres repetidos

Convertir una cadena en un objejo convirtiendo cada elemento en un key
crear un vector vacío
para cada elemento de la cadena dos 
    si el objeto tiene una clave igual al elemento de la cadena de caracteres
    agregar ese caracter al vector vacio

devolver el vector

*/

var repeatedChars = function(str1, str2){
    str2 =  str2.split('').reduce((a,b)=> (a[b]='',a),{}); 
    let ans=[]
    for (let i=0;i < str1.length ;i++) {
        if ( str2.hasOwnProperty(str1[i])){
            ans.push(str1[i])
        }
    }
    return ans.join('')
}

console.log(repeatedChars("german", "gabriela"));
console.log(repeatedChars("roman", "ramon"));