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
