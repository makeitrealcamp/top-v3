var hammingDistance = function(x, y) {
let res=0
while (x>0 || y>0) {
    res +=(x%2)^(y%2);
    x >>=1
    y >>=1
}
return res
}

console.log(hammingDistance(93,73))
console.log(hammingDistance(1,4))
console.log(hammingDistance(4,14))
console.log(hammingDistance(1577962638,1727613287))
