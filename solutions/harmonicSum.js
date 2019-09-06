/*# Harmonic Sum

Write a function called `harmonicSum` that calculates the harmonic sum of n. The harmonic sum is the sum of reciprocals of the positive integers.

**Note:** Use recursion to solve this exercise.

```javascript
harmonicSum(1); // 1
harmonicSum(2); // 1 + 1/2 = 1.5
harmonicSum(3); // 1 + 1/2 + 1/3 = 1.833333
```
 */
function harmonicSum(num) {  
    if (num<1) {
        return 0
    }    
    return   1/num + harmonicSum(num-1) 
}
console.log(harmonicSum(1)); // 1
console.log(harmonicSum(2)); // 1 + 1/2 = 1.5
console.log(harmonicSum(3)); // 1 + 1/2 + 1/3 = 1.833333