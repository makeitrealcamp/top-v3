/*
Entrada J = String que tiene cada caracter representando un tipo piedra que es joya
Entrada S = String que tiene cada caracter representando las piedras existentes
Salida = número que representa la cantidad de piedras en S que son joyas
Instrucciones
definir i, count=0
mientras i sea menor a la longitud de s
    si la piedra i es una joya
        aumentar count en 1
retornar count
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let count = 0;
    for (let i =0; i<S.length;i++){
        if(J.indexOf(S[i])>-1){
            count++;
        }
    }
    return count;
};