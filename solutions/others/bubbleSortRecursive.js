
function bubleSortRecursive(array) {

    if (array.length<=1) {
        return array
    }

    for (let i=0; i<array.length-1;i++) {
        if (array[i]>array[i+1]) {
           [array[i], array[i+1]] = [array[i+1], array[i]]
           bubleSortRecursive(array)
        }
    }

   return  array
}

console.log(bubleSortRecursive([10,9,8,7,6,5,4,3,2,1]));