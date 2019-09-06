let addNumsArray = function(array) {
  if (array.length === 1) {
    return array[0];
  }

  let temp = array.pop();
  array[array.length - 1] = array[array.length - 1] + temp;
  
  return addNumsArray(array);
}


console.log(addNumsArray([1,2,3,4]));
console.log(addNumsArray([15, 3, 2]));
