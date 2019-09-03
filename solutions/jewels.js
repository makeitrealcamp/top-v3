https://leetcode.com/problems/jewels-and-stones/
/* input: two strings (J represents the number of jewels - S represents
  the total of stones)
  output: Number of jewels
  1. Write a function to count the number of jewels
  2. Write a loop to run the string S
  3. Create a condition to compare the number of jewels in S.
  4. Increase the count
  6. Return the number of jewels in the stones group. */
  var numJewelsInStones = function(J, S) {
    var count = 0;
    for(var i=0; i<S.length; i++){
        char = S[i]
        if (J.indexOf(char) > -1){
            count ++
        }
    }
    return count
};
