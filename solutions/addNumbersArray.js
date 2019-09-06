// # Add Numbers of Array
//
// Write a function `addNumsArray` that receives an array of numbers and returns
// the sum of all the numbers.
//
// **Note:** Use recursion to solve this exercise.

function addNumsArray(arr) {
  if(!arr.length) {
    return 0;
  }
  var element = arr.shift();
  return element + addNumsArray(arr);
}

// ```javascript```
console.log(addNumsArray([1, 2, 3, 4])); // 10
console.log(addNumsArray([15, 3, 2]));; // 20
