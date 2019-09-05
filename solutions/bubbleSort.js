// Complexity: O(n²)

function bubbleSort(array){
    let changes = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]>array[i+1]){
            let aux = array[i+1];
            array[i+1] = array[i];
            array[i] = aux;
            changes++;
        }
    }
    if(changes>0){
        bubbleSort(array);
    }
}

var array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("Unordered array: ", array);
bubbleSort(array);
console.log("Ordered array: ", array);
