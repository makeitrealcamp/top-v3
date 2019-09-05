/* # Binary Search

Write a function called `binarySearch` that receives two arguments: an array of ordered numbers and an number. The function returns true if the second argument is on the array, false otherwise.

Implement the algorithm described [here](https://guias.makeitreal.camp/algoritmos/busqueda#busqueda-binaria).

What is the complexity of this algorithm? */

function binarySearch(list, element){
    return BinarySearchRecursive(list, element, 0, list.length-1)

    function BinarySearchRecursive(list, element, start, end) {
        if (start > end) {
            return false
        } if (end-start === 0) { return false
        let half= Math.floor(end-start/2);
        }if (list[half]===element) {
            return true;
        } if (list[half]<element) {
            return BinarySearchRecursive(list, element, half+1, end)
        }
        if (list[half]>element) {
            return BinarySearchRecursive(list, element, start, half-1)
        }
​
   }
}
​
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5))
console.log(binarySearch([1, 2, 3, 4, 5, 6], 8))
binarySearch([1, 2, 3, 4, 5, 6], 5); // true
binarySearch([1, 2, 3, 4, 5, 6], 8); // false
