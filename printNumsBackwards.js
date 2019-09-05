/* # Print Numbers Backwards

Write a function called `printNumsBackwards` that receives a number and prints all the numbers from the number to 1. Print each number in a new line.

**Note:** You have to use recursion to solve this exercise.

function printNumsBackwards (num) */


function printNumsBackwards (number){
  if (number < 1) {
    return 1
  }
  console.log (number);
  printNumsBackwards(number - 1)
}

printNumsBackwards(10); // prints 10 to 1
printNumsBackwards(500); // prints 500 to 1
```
