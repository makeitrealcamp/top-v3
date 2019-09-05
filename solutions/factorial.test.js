// write your solution here
var factorial = function(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

var factorial_2 = function(n) {
  var cont = 1

  while ( n > 0 ) {
    cont = cont * n
    n--
  }

  return cont
}

// tests
test('factorial', function() {
  expect(factorial(4)).toBe(24);
  expect(factorial(5)).toBe(120);
  expect(factorial(6)).toBe(720);
  expect(factorial(9)).toBe(362880);
});

// tests
test('factorial', function() {
  expect(factorial_2(4)).toBe(24);
  expect(factorial_2(5)).toBe(120);
  expect(factorial_2(6)).toBe(720);
  expect(factorial_2(9)).toBe(362880);
});
