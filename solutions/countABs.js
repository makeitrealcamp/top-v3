/*
Entrada =  string
Salida =  Objeto que tiene llaves a y b con el valor de la cantidad de la aparición de dichas letras en el string.
instrucciones:
Definir as, bs, i = 0
mientras que i < longitud del string
    si la posicion i del string es una a
        incrementar as en 1
    si la posición i del string es una b
        incrementar bs en 1
retornar objeto con llave a de valor as y llave b de valor bs
*/

function countABs(str) {
    let as = 0;
    let bs = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i]=="a"){
            as++
        }else if(str[i]=="b"){
            bs++
        }
    }
    return {a:as,b:bs}
}
console.log(countABs("aaabbb")); // { a: 3, b: 3 }
console.log(countABs("abc")); // { a: 1, b: 1 }
console.log(countABs("zxy")); // { a: 0, b: 0 }