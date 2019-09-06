/*# Add Numbers Of Nested Array

Write a function `addNumsNestedArray` that receives an array of numbers and arrays, and returns the sum of all the numbers (including those in the nested arrays).

**Note:** Use recursion to solve this exercise.

```javascript
addNumsNestedArray([1, [2, 3], 4]); // 10
addNumsNestedArray([1, [1, 1], [1, [1, 1]], 1]); // 7
```
 */
/*
function addNumsNestedArray (array) {
     if (array.length===0) {
         return 0
     }
     if (Array.isArray(array[0])){              
        array[0]= flatten (array[0])
        return addNumsNestedArray (array)
        } else {
            return array[0]  + addNumsNestedArray (array.slice(1)) 
        }
 
function addNumsArray (array) { 
    if (array.length===0){
        return 0
    }
    return array[0] + addNumsArray(array.slice(1))     
}            
           
 
function flatten(array) {
    var array_flattend = [];
    array.forEach(element => {
        if (Array.isArray(element)){
            array_flattend = array_flattend.concat(flatten(element))
        } else {
            array_flattend.push(element)
        }
    }); 
    return addNumsArray(array_flattend)
  }          
    
     
}*/
/*
function addNumsNestedArray(array) {
    if (array.length === 0) {
      return 0;
    }
    if (Array.isArray(array[0])) {
      return addNumsNestedArray(array.splice(0, 1)[0]) + addNumsNestedArray(array);
    } else {
      return array.splice(0, 1)[0] + addNumsNestedArray(array);
    }
  }
  */
 /*
 function addNumsNestedArray(arr) {
    var sum = 0;
    
    for (var i=0; i < arr.length; i++) {
      var e = arr[i];
      if (Array.isArray(e)) {
        sum += addNumsNestedArray(e);
      } else {
        sum += e;
      }
    }
    
    return sum;
  }*/

  function addNumsNestedArray(arr) {
    var sum = 0;
    
    for (var i=0; i < arr.length; i++) {
      var e = arr[i];
      sum += Array.isArray(e) ? addNumsNestedArray(e) : e;
    }
    
    return sum;
  }

console.log(addNumsNestedArray([1, [2, 3], 4])); // 10
console.log(addNumsNestedArray([1, [1, 1], [1, [1, 1]], 1])); // 7