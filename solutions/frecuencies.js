/**
 * @param {string} str
 * @return {object}
 */

function frequencies(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if(str[i] in obj){
            obj[str[i]]=obj[str[i]]+1;
        }else{
            obj[str[i]]=1;
        }
    }
    return obj
}
console.log(frequencies("hola mundo")); // { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }
console.log(frequencies("anita lava la tina")); // { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }