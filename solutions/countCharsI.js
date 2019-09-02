/*
# Count Chars I

Write a function called `countABs` that receives a string and returns an object with the number of **a's** and the number of **b's**.

```javascript
countABs("aaabbb"); // { a: 3, b: 3 }
countABs("abc"); // { a: 1, b: 1 }
countABs("zxy"); // { a: 0, b: 0 }
```
*/
var countABs = function (str) {
let letters={
    a:0,
    b:0
}
for (let i=0;i < str.length ;i++) {
    if ( letters.hasOwnProperty(str[i])){
        letters[str[i]]++;
    }
}
return letters;
}
    


console.log(countABs("aaabbb")); // { a: 3, b: 3 }
console.log(countABs("zxy")); // { a: 0, b: 0 }
console.log(countABs("abc")); // { a: 1, b: 1 }