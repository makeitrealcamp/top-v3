// write your pseudocode
// Input: A String with a sentence
// Output: the length (in numbers) of the longest word in the sentence

// Instructions:
// Split the sentence eliminating the spaces
// Compare one by one
// If we find a longest word store it in a new variable
// Return the length of the longest word

// write your solution here

function findLongestWordLength(string) {
    var str = string.split(" ")
    var longest = 0
    var word = null
    for (var i = 0; i < str.length ; i++) {
        if (longest < str[i].length) {
            longest = str[i].length
            word = str[i]
        }
    }
    return word.length
}

// tests
test('returns longest word length', function() {
  expect(findLongestWordLength("hi world")).toBe(5);
  expect(findLongestWordLength("the vampire serie")).toBe(7);
  expect(findLongestWordLength("The quick brown fox jumped over the lazy dog")).toBe(6);
})
