/*
Entrada: Un string (str).

Salida: Un objeto con la cantidad de veces que los caracteres que conforman el string se encuentran en el.

Instrucciones:
1. Crear una función frequencies que reciba un string (str).
2. Crear un objeto (obj) en el cual se reciban los caracteres como llave y la cantidad de veces que se repitan como valor.
3. Reemplazar los espacios en blanco del string.
4. Recorrer el string.
5. Asignar el caracter recorrido a una variable para asignar la llave dinamicamente.
6. Si la llave con ese caracter esta definida sumar 1, si no definirla con el valor 1.
7. Retornarel objeto resultado.
*/

function frequencies(str){
  let obj = {}
  str = str.replace(/ /g,"")
  for (let i=0; i<str.length; i++){
    let key = str[i]
    if (obj[key] != undefined){
      obj[key]++
    } else {
      obj[key] = 1
    }
  }
  return obj
}
console.log(frequencies("anita lava la tina"))
