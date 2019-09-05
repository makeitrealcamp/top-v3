/*
# Flatten Array

Write a function called `flatten` that receives an array of arrays and returns a flattened array.

```javascript
console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]
```
*/

/*function flatten(array) {
    var array_flattend = [];
    return flt (array);
    function flt (array) {
        array.forEach(element => {
            if (Array.isArray(element)){
                flt(element)
            } else {
                array_flattend.push(element)
            }
        }); 
        return (array_flattend)
  }
  
}*/

function flatten(array) {
    var array_flattend = [];
    array.forEach(element => {
        if (Array.isArray(element)){
            array_flattend = array_flattend.concat(flatten(element))
        } else {
            array_flattend.push(element)
        }
    }); 
    return (array_flattend)
  }
  





console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]
