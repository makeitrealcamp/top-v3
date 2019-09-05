// Insertion Sort
//
// Complejidad: O(n^2)


let insertionSort = function(array) {
  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++ ) {
      if (array[i] < array[j]) {
        let temp = array.splice(i, 1);
        array.splice(j, 0, temp[0]);
      }
    }
  }

  return array;
}

console.log(insertionSort([10,1,7,221,31,4,112,0]));
