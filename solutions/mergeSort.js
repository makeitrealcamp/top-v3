let mergeSort = function(array) {
  if (array.length <= 1) {
    return array;
  }

  let sub_array_1 = array.slice(0, Math.floor(array.length / 2))
  let sub_array_2 = array.slice(Math.floor(array.length / 2), array.length)

  return merge(mergeSort(sub_array_1), mergeSort(sub_array_2))
}

let merge = function(array1, array2) {
  let result = []
  while(array1.length || array2.length) {
    if (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        result.push(array1.shift())
      } else {
        result.push(array2.shift())
      }
    } else if (array1.length) {
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }

  return result
}


console.log(mergeSort([2, 0, 1 , 4, 7, 3]));
