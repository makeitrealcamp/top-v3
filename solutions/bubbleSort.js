// Bubble Sort
//
// Complejidad: O(n^2)


let bubbleSort = function(array) {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length - i; j++ ) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort([10,1,7,221,31,4,112,0]));
