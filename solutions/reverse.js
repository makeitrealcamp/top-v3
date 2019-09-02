var reverseString = function(s) {
    let res = [];
    for (let i=s.length - 1; i>=0; i--){
        res.push(s[i]);
    }
    return res;
};
console.log(reverseString(["h","e","l","l","o"]));
