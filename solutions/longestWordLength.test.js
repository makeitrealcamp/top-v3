// write your pseudocode
//
//  Input: String
//  Output: Integer
//
//  Instructions:
//    * Change the string to an array of each word
//    * Iterate over the array to indetify the length of each positio
//    * Return the longest world
//

// write your solution here

var findLongestWordLength = function(string) {
  var array = string.split(" ").sort((a, b) => b.length - a.length)

  return array[0].length
}

// tests
test('returns longest word length', function() {
  expect(findLongestWordLength("hi world")).toBe(5);
  expect(findLongestWordLength("the vampire serie")).toBe(7);
  expect(findLongestWordLength("The quick brown fox jumped over the lazy dog")).toBe(6);
})
