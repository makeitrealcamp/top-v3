// # Binary Search
//
// Write a function called `binarySearch` that receives two arguments:
// an array of ordered numbers and an number. The function returns true if the
// second argument is on the array, false otherwise.

// Implement the algorithm described [here]
// (https://guias.makeitreal.camp/algoritmos/busqueda#busqueda-binaria).

// What is the complexity of this algorithm?
// R: O(log n)

var binarySearch = function(array, num) {
  var mid = Math.floor((array.length) / 2);
  if(array.length <= 0) {
    return false;
  }

  // if(array.length === 1) {
  //   if(array[0] === num) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  if(array[mid] === num) {
    return true;
  } else if(array[mid] > num) {
    return binarySearch(array.slice(0, mid), num);
  } else {
    return binarySearch(array.slice(mid + 1, array.length), num); // a mid se le sumó 1
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 8));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 1));
