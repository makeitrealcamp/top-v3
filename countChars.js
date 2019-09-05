// # Count Chars

// Write a function called `countAs` that receives a string and returns the number of A's in the string.

// **Note:** Use recursion to solve this exercise.

function countAs (str) {
  let index = 0;
  let count = 0;
    return countAs(str, index)
    function countAs (str, index){
    if (index >= str.length){
      console.log(count)
      return count
    }
    if (str[index] === "a"){
      count ++
    }
    countAs(str,index+1)
  }
}
countAs("aaabbb"); // 3
countAs("abc"); // 1
countAs("zxy"); // 0
