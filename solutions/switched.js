/* Input: array
Output: Same array with switched index
1. Type a function named s
2. Write a loop for switch the first element with the last element,
then the second element with the second-to-last element, etc., until
reach the middle of the array.
3. Create a new variable called else to keep the iteration of s
4. Provide a new definition for the variable with the iteraction , switching the
index of each element in the array
5. return the array switche.
}
// https://leetcode.com/problems/reverse-string/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (var i = 0; i <= Math.floor((s.length - 1) / 2); i++) {
      let el = s[i];
      s[i] = s[s.length - 1 - i];
      s[s.length - 1 - i] = el;
    }
   return s
};
