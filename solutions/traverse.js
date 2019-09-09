
/*# Traverse
Write a function called traverse that receives an array and a function. 
It should call the function for each element of the array passing the element as an argument.
​
```javascript
traverse([1, 2, 3], function(e) {
  console.log("Hello");
});
// should print:
// "Hello"
// "Hello"
// "Hello"
```
​
​
```javascript
traverse([1, 2, 3, 4], function(e) {
  console.log(e);
});
// should print:
// 1
// 2
// 3
// 4
```
*/

function traverse(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i])
    }
};

console.log(traverse([1, 2, 3, 4], function (e) {
    console.log(e)
}))

function traverse2(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i])
    }
};
console.log(traverse2([1, 2, 3, 4]))

