// # Fibonacci
//
// Write a function called `fibonacci` that receives a number and returns the `n`
// number of the [fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number) sequence.

// Complexity: O(n)

////////// Recursive function //////////
function fibonacci(n) {
  if(n === 0 || n === 1){
    return 1;
  }
  if(n > 1) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// tests
test('fibonacci', function() {
  expect(fibonacci(0)).toBe(1);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(4)).toBe(5);
  expect(fibonacci(5)).toBe(8);
});

////////// Iterative function //////////
function fibonacci2(n) {
  var fn = [0, 1];
  for(var i = 0; i < n; i++) {
    var sum = fn[i + 1] + fn[i];
    fn.push(sum)[i + 2];
  }
  return fn.pop();
}

// tests
test('fibonacci2', function() {
  expect(fibonacci2(0)).toBe(1);
  expect(fibonacci2(1)).toBe(1);
  expect(fibonacci2(4)).toBe(5);
  expect(fibonacci2(5)).toBe(8);
});
