/*# Print Numbers

Write a function called `printNumbers` that receives a number and prints all the numbers from 1 to N. 
Print each number in a new line.

**Note:** Use recursion to solve this exercise.

```javascript
printUpTo(10); // prints 1 to 10
printUpTo(500); // prints 1 to 500
```
*/
function printNumbers(number) {
    let n=1
    return printN(number,n)    
    function printN (number,n) {
        if (n>number){
            return 
        }  
       console.log(n)
       printN (number, n+1) 
    }
}

//printNumbers(10); // prints 1 to 10
//printNumbers(500); // prints 1 to 500
console.log(printNumbers(10))