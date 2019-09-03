// Pseudocode
// Input: two strings
// Output: boolean (true if strings are anagrams, false otherwise)
// Instructions:
//   Sort both strings
//   If they are equal
//     return true
//   else
//     return false

// write your solution here


// tests
test('valid anagrams', function() {
  expect(anagram("elvis", "lives")).toBe(true);
  expect(anagram("anagram", "nagaram")).toBe(true);
});

test('invalid anagrams', function() {
  expect(anagram("hello", "world")).toBe(false);
  expect(anagram("read", "wise")).toBe(false);
})
