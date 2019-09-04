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

function fibonacci(n){
    let n1=0;
    let n2=1;
    let n3=0;
    for(let i=1; i<n;i++){
        n3=n1+n2;
        n1=n2;
        n2=n3; 
    }
    return n3
}
console.log(fibonacci(0)); // 1
console.log(fibonacci(1)); // 1
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13