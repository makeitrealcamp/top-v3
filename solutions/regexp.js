console.log("Parte 1:");
var r = /[A-Z]{3}[0-9]{3}/;
console.log(r.test("hello")); // false
console.log(r.test("MVV387")); // true
console.log(r.test("mvv387")); // false
console.log("Parte 2:")
r = /#[0-9A-Fa-f]{3}$|[0-9A-Fa-f]{6}$/;
console.log(r.test("#abc")); // true
console.log(r.test("#f00")); // true
console.log(r.test("#BADA55")); // true
console.log(r.test("#C0FFEE")); // true
console.log(r.test("#gac")); // false
console.log(r.test("#f005")); // false
console.log("Parte 3:")
r = /[0-3][0-9]\/[0-1][0-9]\/\d{4}/;
console.log(r.test("12/12/2012")); // true
console.log(r.test("24/08/1982")); // true
console.log(r.test("99/11/2019")); // false
console.log(r.test("hello")); // false