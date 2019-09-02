// https://leetcode.com/problems/reverse-string/

function ReverseString(char){
    str = char.join('')
    char = []
    for (let i = str.length - 1; i >= 0; i--){
        char.push(str[i])
    }
return char
}

console.log(ReverseString(["H","a","n","n","a","h"]))