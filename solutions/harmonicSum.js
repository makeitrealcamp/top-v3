// # Harmonic Sum
//
// Write a function called `harmonicSum` that calculates the harmonic sum of n.
// The harmonic sum is the sum of reciprocals of the positive integers.

// **Note:** Use recursion to solve this exercise.

function harmonicSum(n) {
  if (n < 2) {
    return 1;
  }
  var sum = (1 / n) + harmonicSum(n - 1);
  return sum;
}

// javascript
console.log(harmonicSum(1)); // 1
console.log(harmonicSum(2)); // 1 + 1/2 = 1.5
console.log(harmonicSum(3)); // 1 + 1/2 + 1/3 = 1.833333
console.log(harmonicSum(4)); // 1 + 1/2 + 1/3 + 1/4 = 2.083333
console.log(harmonicSum(5)); // 1 + 1/2 + 1/3 + 1/4 + 1/5 = 2.283333
