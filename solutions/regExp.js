// var r = /[A-Z][0-9]/ //your solution here
// console.log(r.test("hello")); // false
// console.log(r.test("MVV387")); // true
// console.log(r.test("mvv387")); // false




var r = /^([0 - 2][0 - 9]|(3)[0 - 1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/g
console.log(r.test("12/12/2012")); // true
console.log(r.test("24/08/1982")); // true
console.log(r.test("99/11/2019")); // false
console.log(r.test("hello")); // false