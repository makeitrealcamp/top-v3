/*
# Fibonacci

Write a function called `fibonacci` that receives a number and returns the `n` number of the [fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number) sequence.

```javascript
console.log(fibonacci(0)); // 1
console.log(fibonacci(1)); // 1
console.log(fibonacci(4)); // 5
console.log(fibonacci(5)); // 8
```
*/

function fibonacci(n) {
    if (n<=2) return 1;
    return (fibonacci(n-1) + fibonacci (n-2));
}
console.log(fibonacci(0)); // 1
console.log(fibonacci(1)); // 1
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13