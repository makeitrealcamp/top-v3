// write your solution here

let fibonacci = function(n) {
  if (n === 0 || n === 1){
    return 1;
  }

  if(n > 1) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

let fibonacci_2 = function(n) {
  let num_1 = 0;
  let num_2 = 1;
  let temp = 0;

  for (i = n; i > 0; i--) {
    temp = num_2;
    num_2 = num_1 + num_2
    num_1 = temp
  }

  return num_2
}

//  tests
 test('fibonacci', function() {
   expect(fibonacci(0)).toBe(1);
   expect(fibonacci(1)).toBe(1);
   expect(fibonacci(4)).toBe(5);
   expect(fibonacci(5)).toBe(8);
 });


 test('fibonacci', function() {
   expect(fibonacci_2(0)).toBe(1);
   expect(fibonacci_2(1)).toBe(1);
   expect(fibonacci_2(4)).toBe(5);
   expect(fibonacci_2(5)).toBe(8);
 });
