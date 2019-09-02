// https://leetcode.com/problems/jewels-and-stones/

function numJewelsInStones (j, s){
    res = 0
    for (let i = 0; i < s.length; i++){
        if (j.includes(s[i])){
            res += 1
        }
    }
    return res
}


numJewelsInStones('aA', 'aAAbbbb')
numJewelsInStones('z', 'ZZ')