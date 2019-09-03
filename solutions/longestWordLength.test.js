// write your pseudocode
// Pseudocode
// Input: one string with a sentence
// Output: length of the longest word in the sentence
// Instructions:
//   split string into array of words
//   sort array using the criteria of the longest word
//   return the lenght of the first element of the array

// write your solution here
function findLongestWordLength(str) {
  var arr = str.split(" ");
  arr.sort((a,b) => b.length - a.length);
  return arr[0].length;
}

// tests
test('returns longest word length', function() {
  expect(findLongestWordLength("hi world")).toBe(5);
  expect(findLongestWordLength("the vampire serie")).toBe(7);
  expect(findLongestWordLength("The quick brown fox jumped over the lazy dog")).toBe(6);
})
