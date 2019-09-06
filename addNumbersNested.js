/* # Add Numbers Of Nested Array exe

Write a function `addNumsNestedArray` that receives an array of numbers and arrays, and returns the sum of all the numbers (including those in the nested arrays).

**Note:** Use recursion to solve this exercise. */

function addNumsNestedArray (array) {
  let res = 0
  if (array.length === 0){
    return res
  }
  if (Array.isArray(array[0])){
     let elem1 = array.splice(0,1)
    return addNumsNestedArray(elem1[0]) + addNumsNestedArray(array)
  } else {
    let elem2 = array.splice(0, 1)
    res = elem2[0] + addNumsNestedArray(array)
  }
  return res
}

//```javascript
console.log(addNumsNestedArray([1, [2, 3], 4])); // 10
console.log(addNumsNestedArray([1, [1, 1], [1, [1, 1]], 1])); // 7
