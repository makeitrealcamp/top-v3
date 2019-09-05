// Selection Sort
//
// Complejidad: O(n^2)


let selectionSort = function(array) {
  for (i = 0; i < array.length; i++) {
    let min_actual = i;

    for (j = i + 1; j < array.length; j++) {
      if (array[min_actual] < array[j]) {
        min_actual = j;
      }
    }

    if (min_actual != i) {
      let temp = array[i]
      array[i] = array[min_actual]
      array[min_actual] = temp
    }
  }

  return array
}

console.log(selectionSort([10,1,7,221,31,4,112,0]));

