//# Print Numbers

//Write a function called `printNumbers` that receives a number and prints all the numbers from 1 to N. Print each number in a new line.

// **Note:** Use recursion to solve this exercise.

function printNumbers (number){
  let num = 1
  return printN(number, num)

  function printN(number, num){
    if (num> number){
      return
    }
    console.log(num)
    printN(number, num+1)
  }
}
printNumbers(10)
printNumbers(500)
