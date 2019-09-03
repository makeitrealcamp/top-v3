/*
Entrada: Dos strings (a,b).

Salida: Un nuevo string con los caracteres que se repiten en ambos strings.

Instrucciones:
1. Crear una función repeatedChars que reciba dos strings (a,b).
2. Crear un arreglo (res) en el cual se guarde el resultado.
3. Recorrer ambos strings con for anidados.
4. Si el caracter se encuentra en ambos insertar el caracter al arreglo (res).
5. Retornar el arreglo resultado como string.

*/

function repeatedChars(a,b){
  let res=[]
  for(var i = 0; i <= a.length; i++) {
    for(var j = 0; j <= b.length; j++) {
        if(a[j] === b[i]) {
            res.push(a[j])
        }
    }
}
return res.join('')
}

console.log(repeatedChars("andres", "aaaaaaa"))
