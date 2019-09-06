// Selection Sort

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){
        var smaller = i 
        for (let j = i; j < arr.length; j++){
            if (arr[smaller] > arr[j]){
                smaller = j 
            }
        }
        var temp = arr[smaller];
        arr[smaller] = arr[i];
        arr[i] = temp; 
    }
    console.log(arr)
}

// Insertion Sort

function insertionSort(arr){
    for (i = 1; i < arr.length; i++){
        let value = arr[i]
        let j = i-1
        while(j >= 0 && arr [j] > value) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = value
    }
    console.log(arr)
}

// Bubble Sort

function bubbleSort(arr) {    
    for (var i = 0; i < arr.length ; i++) {
        for(var j = 0 ; j < arr.length - i - 1; j++){ 
            if (arr[j] > arr[j + 1]) {
             var temp = arr[j]
            arr[j] = arr[j+1]
            arr[j + 1] = temp
         }
       }
    }
    console.log(arr)
}


// For the solutions I didn't use another array just reorganize the original array the way the type of sort requested 

bubbleSort([42, 12, 2, 13, 7, 8])
insertionSort([42, 12, 2, 13, 7, 8])
selectionSort([42, 12, 2, 13, 7, 8])

