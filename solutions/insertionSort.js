// Complexity: O(n²)

// Main function
function insertionSort(unordered) {
  var ordered = [];
  insertionSortRecursive(ordered, unordered);
  return ordered;
}

// Recursive function with two arrays
function insertionSortRecursive(ordered, unordered) {
  // console.log(unordered);
  if(unordered.length > 0){
    insert(ordered, unordered.splice(0, 1)[0]);
    insertionSortRecursive(ordered, unordered);
  }
}

// Insert element in an ordered list
function insert(ordered, element) {
  for(var i = 0; i < ordered.length; i++) {
    if(ordered[i] > element) {
      ordered.splice(i, 0, element);
      return;
    }
  }
  ordered.push(element);
}
var array = [5,3,9,4,1,2,3]
console.log("Unordered array: ", array);
console.log("Ordered array: ", insertionSort(array));
