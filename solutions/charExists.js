// # Character Exists?
//
// Write a function called `charExists` that receives two arguments: a string
// and a character. It returns true if the character exists in the string, false otherwise.
//
// **Note:** Use recursion to solve this exercise.

// Complexity: O(n)

var charExists = function(str, char) {
  if (str.length === 0) {
    return false
  }

  if (str.substring(0,1) === char) {
    return true
  } else {
    return charExists(str.substring(1, str.length), char)
  }
}

console.log(charExists("hello", "l")); // true
console.log(charExists("world", "n")); // false
