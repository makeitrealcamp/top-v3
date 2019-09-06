// # Add Numbers Of Nested Array
//
// Write a function `addNumsNestedArray` that receives an array of numbers and
// arrays, and returns the sum of all the numbers (including those in the nested arrays).
//
// **Note:** Use recursion to solve this exercise.

function addNumsNestedArray(arr) {
  if(!arr.length) {
    return 0;
  }
  var element = arr.shift();
  if(Array.isArray(element)) {
    return addNumsNestedArray(element) + addNumsNestedArray(arr);
  } else {
    return element + addNumsNestedArray(arr);
  }
}

// Test
console.log(addNumsNestedArray([1, [2, 3], 4])); // 10
console.log(addNumsNestedArray([1, [1, 1], [1, [1, 1]], 1])); // 7
