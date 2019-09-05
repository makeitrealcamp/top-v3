// # Count Chars

// Write a function called `countAs` that receives a string and returns the number
// of A's in the string.
// **Note:** Use recursion to solve this exercise.

// Complexity: O(n);

// Main function
function countAs(str) {
  if (str.length < 1) {
    return;
  }
  return contador(str, 0, "a");
}
// Recursive function with a string, counter and character
function contador(str, n, char) {
  if(str.length < 1) {
    console.log(n);
    return;
  }
  var m = str.substring(0, 1);
  if(m === char) {
    contador(str.substring(1), n+1, char);
  } else {
    contador(str.substring(1), n, char);
  }
}

countAs("aaabbb") // 3
countAs("abc"); // 1
countAs("zxy"); // 0
