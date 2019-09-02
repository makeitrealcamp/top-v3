// https://leetcode.com/problems/jewels-and-stones/
var numJewelsInStones = function(J, S) {
    var total = 0;
    for (var i=0; i < S.length; i++) {
        var char = S[i];
        if (J.indexOf(char) > -1) {
            total++;
        }
    }

    return total;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZZ"));
