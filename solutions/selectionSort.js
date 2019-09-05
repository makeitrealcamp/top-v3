//Primero se retira el menor
//Se añade menor a arreglo organizado
//Si el arreglo original no esta vacío se llama recursivo

// Complexity: O(n²)

//Main function
function selectionSort(array) {
  let ordered = [];
  selectionSortRecursive(array, ordered);
  return ordered;
}

//Finds the index of the lesser value in an array
function findLesser(array) {
  let lesserValue = array[0];
  let lesserIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < lesserValue) {
      lesserValue = array[i];
      lesserIndex = i;
    }

  }
  return lesserIndex;
}

//Recursive function with two arrays
function selectionSortRecursive(unordered, ordered) {
  ordered.push(unordered.splice(findLesser(unordered), 1)[0]);
  if (unordered.length > 0) {
    selectionSortRecursive(unordered, ordered);
  }
}

//Test
var array = [9,8,7,6,5,4,3,2,1]
console.log("Unordered array: ", array);
console.log("Ordered array: ", selectionSort(array));
