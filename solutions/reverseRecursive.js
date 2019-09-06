// # Reverse String
//
// Write a function called `reverseString` that receives a string and returns the
// reversed string.
//
// **Note:** Use recursion to solve this exercise.

function reverseString(str) {
  if(!str) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

// Test
console.log(reverseString("hello world")); // "dlrow olleh"
