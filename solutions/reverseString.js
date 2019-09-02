var reverseString = function(arr) {
  for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
      var current_number = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = current_number;
  }
  return arr;
}

console.log(reverseString(["a", "b", "c"]))
console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))
