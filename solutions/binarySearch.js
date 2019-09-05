var binarySearch = function(array, num) {
  var mid = Math.floor((0 + array.length) / 2)
  console.log(array)

  if (array.length <= 0) {
    return false
  }
 
  if (array[mid] === num) {
    return true
  } else if (array[mid] > num) {
    return binarySearch(array.slice(0, mid), num)
  } else {
    return binarySearch(array.slice(mid + 1, array.length), num)
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 5))
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6))
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3))
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7))
console.log(binarySearch([1, 2, 3, 4, 5, 6], 1))
