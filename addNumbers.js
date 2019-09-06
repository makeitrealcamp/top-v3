// addNumbers.js

function addArray (array){
  var res = 0
  if (array.length === 0){
    return res
  } else {
    elem = array.splice(0, 1) // splice functiion return a new array (elem) without the selected element.
    res = elem[0] + addArray(array) // This is the recursive operation.
  }
  return res
}
console.log(addArray([1, 2, 3, 4])); // 10
