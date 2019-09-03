/* Pseudocode:
1. Create a function called findLongestWordLength to contain a string
2. Convert the str in an array in order to review the length for each str value.
3. Create a variable wich value will be 0 at the begining, and it will to increase
in relation with the length of the str.
4. Create a looo for run the length of the stair and determine which word is the
largest one.
5. Compare the lenght values of each word after the iteraction.
6. Return the largest lenght that represents the largest word. */
function findLongestWordLength (str){
  str = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < str.length; i++){
    if(str[i].length > longestWord){
      longestWord = str[i].length
    }
  }
  return longestWord
}


test('returns longest word length', function() {
  expect(findLongestWordLength("hi world")).toBe(5);
  expect(findLongestWordLength("the vampire serie")).toBe(7);
  expect(findLongestWordLength("The quick brown fox jumped over the lazy dog")).toBe(6);
})
