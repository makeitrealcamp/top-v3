// # Factorial
//
// Write a function called `factorial` that receives a number and returns the
// factorial of the number. The factorial is the multiplication of every positive
// number up to the number. For example, the factorial of 5 is 120 because `5 * 4 * 3 * 2 * 1 = 120`.

// Complexity: O(n)

////////// Recursive function //////////
function factorial(n) {
  if(n === 0) {
    return 0;
  }
  if(n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// tests
test('factorial', function() {
  expect(factorial(4)).toBe(24);
  expect(factorial(5)).toBe(120);
  expect(factorial(6)).toBe(720);
  expect(factorial(9)).toBe(362880);
});

////////// Iterative function //////////
function factorial2(n) {
  if(n === 0) {
    return 0;
  }
  if(n === 1) {
    return 1;
  }
  var a = 1;
  for(var i = n; i > 0; i--) {
    a *= i;
  }
  return a;
}

// tests
test('factorial', function() {
  expect(factorial2(4)).toBe(24);
  expect(factorial2(5)).toBe(120);
  expect(factorial2(6)).toBe(720);
  expect(factorial2(9)).toBe(362880);
});
