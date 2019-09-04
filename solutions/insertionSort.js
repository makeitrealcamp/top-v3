//Main function
function insertionSort(unordered) {
    var ordered = []; //Creates an empty array to store ordered data
    insertionSortRecursive(ordered, unordered);
    return ordered;
}

//Recursivity function, if unordered array is non-empty removes 
//the first element and inserts it on the ordered array, then calls for itself
function insertionSortRecursive(ordered, unordered) {
    if (unordered.length > 0) {
        insert(ordered, unordered.splice(0, 1)[0]);
        insertionSortRecursive(ordered, unordered);
    }
}

//Function to insert in order an element into an ordered array
function insert(ordered, element) {
    for (var i = 0; i < ordered.length; i++) {
        if (ordered[i] > element) {
            ordered.splice(i, 0, element);
            return;
        }
    }
    ordered.push(element);
}

//Test
console.log(insertionSort([5, 3, 9, 4, 1, 2, 3]));