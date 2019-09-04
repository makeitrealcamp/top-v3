function bubbleSort(array) {
    let changes = 0; //Creates a variable to count the amount of changes in the iteration.
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) { //If the element is greater than the nextone then exchanges the elements
            let aux = array[i + 1];
            array[i + 1] = array[i];
            array[i] = aux;
            changes++; //Counts the exchange
        }
    }
    if (changes > 0) { //If changes are greater than 0 then keep going
        bubbleSort(array);
    }
}

//Test
var array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
bubbleSort(array);
console.log(array);