var reverseString = function(s) {
    for (let i=s.length - 1; i>=0; i--){
        s.push(s[i]);
    }
    s.splice(0, s.length/2)
    return s;
};
console.log(reverseString(["h","e","l","l","o"]));
