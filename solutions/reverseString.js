// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
  var temp = 0;
  var j = s.length - 1;
  for(var i = 0; i < j/2; i++) {
    temp = s[i];
    s[i] = s[j - i];
    s[j - i] = temp;
  }
  return s;
};

console.log(reverseString(["D","a","n","i","e","l"]));
