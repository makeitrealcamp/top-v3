function binarySearch(array, element) {
    return binarySearchRecursive(array, element, 0, array.length)
}
function binarySearchRecursive(array, element, start, end){
    if(start>end){
        return false;
    }
    let half = Math.floor((start+end)/2);
    if(array[half]===element){
        return true;
    }
    if(array[half]<element){
        return binarySearchRecursive(array, element, half+1, end)
    }
    if(array[half]>element){
        return binarySearchRecursive(array, element, start, half-1)
    }
}
console.log(binarySearch([1, 2, 3, 4, 5, 8], 7));