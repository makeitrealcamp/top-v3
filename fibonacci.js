/* # Fibonacci.js

Write a function called `fibonacci` that receives a number and returns the `n`
number of the [fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number) sequence. */

function fibonacci(number){
  let number1 = 0
  let number2 = 1
  let number3 = 0
  for (let i = 0; i<number; i++){
    number3 = number1 + number2
    number1 = number2
    number2 = number3
  }
  return number3

}
console.log(fibonacci(0)) // 1
console.log(fibonacci(1)) // 1
console.log(fibonacci(4)) // 3
console.log(fibonacci(5)) // 5
console.log(fibonacci(6)) // 8
console.log(fibonacci(7)) // 13
