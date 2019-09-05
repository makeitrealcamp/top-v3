// # Print Numbers
//
// Write a function called `printNumbers` that receives a number and prints all
// the numbers from 1 to N. Print each number in a new line.

// Complexity: O(n)

function printNumbers(n) {
  if(n > 0) {
    printNumbers(n - 1);
    console.log(n);
  }
  return;
}

printNumbers(100);
printNumbers(500);

// function printNumbers(n) {
//   if(n < 1) {
//     return
//   }
//   printNumbers(n - 1);
//   console.log(n);
// }
