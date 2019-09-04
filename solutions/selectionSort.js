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
console.log(selectionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));