// https://leetcode.com/problems/jewels-and-stones/

// Entrada: Dos strings Jewels y Stones
// Salidad cuantas de las Stones osn Jewels
// Definimos una variable para guardar nuestro resultado (res)
// Recorremos la variable 's'
    // Si el caracter se encuentra en 'j'
        // Sumamos 1+ a la variable 'res'
// Retornamos 'res'

function numJewelsInStones (j, s){
    res = 0
    for (let i = 0; i < s.length; i++){
        if (j.includes(s[i])){
            res += 1
        }
    }
    console.log(res)
}


numJewelsInStones('aA', 'aAAbbbb')
numJewelsInStones('z', 'ZZzzzzzzzzzz')