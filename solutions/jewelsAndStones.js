/*
Entrada: Dos strings (J , S).

Salida: La cantidad de veces que los caracteres de J se encuentran en S, discriminando entre minusculas y mayusculas.

Instrucciones:
1. Crear una función numJewelsInStones que reciba dos strings ( J, S) como argumentos .
2. Crear una variable res para guardar el numero de veces que estan los caracteres de  J en S.
3. Recorrer con un ciclo a travez de la longitud de S.
4. Recorrer con un ciclo anidado a travez de la longitud de J.
5. Si el elemento de S coincide con el de J, sumar 1 unidad a result
6. cuando se cierren los cilos anidados retornar res.

*/


var numJewelsInStones = function(J, S) {
    let res= 0;
    for (let i = 0; i < S.length; i++){
        for (let j = 0; j < J.length; j++)
        if (S[i].indexOf(J[j]) > -1){
            res++
        }
    }
    return res;
};
console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
