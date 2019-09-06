/*# Add Numbers of Array

Write a function `addNumsArray` that receives an array of numbers and returns the sum of all the numbers.

**Note:** Use recursion to solve this exercise.

```javascript
addNumsArray([1, 2, 3, 4]); // 10
addNumsArray([15, 3, 2]); // 20
```
*/
function addNumsArray (array) { 
    if (array.length ===0){
        return 0
    }
    return array[0] + addNumsArray(array.slice(1))     
}

console.log(addNumsArray([1,2,3])) 
console.log(addNumsArray([1, 2, 3, 4])); // 10
console.log(addNumsArray([15, 3, 2])); // 20