function insertionSort(array){
    let pos;
    let aux;
    for (let i=0; i<array.length;i++){   
        aux=array[i];
        pos=i;

        while (pos>0 && array[pos-1]>aux) {
            array[pos]=array[pos-1];
            pos--;
        }
        array[pos]=aux;
    }
    return array
}
console.log(insertionSort([3,2,1]))
console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))