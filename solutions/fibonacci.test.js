// write your solution here

// CICLO FOR:

function fibonacci(num){
    var a = 0
    var b = 1
    var c = a + b
    for (let i = 0; i < num; i++){
        a = b
        b = c
        c = a + b
    }
console.log(b)
}

fibonacci(5);


// // tests
// test('fibonacci', function() {
//   expect(fibonacci(0)).toBe(1);
//   expect(fibonacci(1)).toBe(1);
//   expect(fibonacci(4)).toBe(5);
//   expect(fibonacci(5)).toBe(8);
// });
