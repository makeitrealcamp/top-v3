/*
Entrada: Un string (str).

Salida: Un objeto con la cantidad de veces que los caracteres (a,b) se encuentran en el string (str).

Instrucciones:
1. Crear una función countABs que reciba un string (str).
2. Crear un objeto (obj) en el cual se cuenten los caracteres (a,b).
3. Recorrer el string (str).
  3.1 Si el elemento incluye (a) se suma a la llave del objeto.
  3.2 Si el elemento incluye (b) se suma a la llave del objeto.
4. Retornar el objeto (obj).

*/

function countABs(str){
  let obj={
    a: 0,
    b: 0,
  }
  for (let i = 0; i<str.length; i++){
    if (str[i].includes("a")){
      obj.a++;
    }
    if (str[i].includes("b")){
      obj.b++;
    }
  }
  return obj
}

console.log(countABs("aaabbb"));
console.log(countABs("abc"));
console.log(countABs("zxy"));
