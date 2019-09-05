// # Print Numbers Backwards
//
// Write a function called `printNumsBackwards` that receives a number and
// prints all the numbers from the number to 1. Print each number in a new line.

// Complexity: O(n)

function printNumsBackwards(n) {
  console.log(n);
  if(n < 1) {
    return 1;
  }
  printNumsBackwards(n-1);
}

printNumsBackwards(100);
printNumsBackwards(500);
