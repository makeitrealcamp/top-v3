/*# Count Chars II

Write a function called `frequencies` that receives a string and returns an object with the number of times each character appears in the string (except the blank space).

```javascript
frequencies("hola mundo"); // { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }
frequencies("anita lava la tina"); // { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }
```
*/

var frequencies = function (str){
    let letters={}
    for (let i=0; i < str.length ;i++) {
        if (str[i]!==" ") {
            if ( !letters.hasOwnProperty(str[i])){
                letters[str[i]]=1;
            }else {
                letters[str[i]]++;
            }
        }       
    }
    return letters;
}
console.log(frequencies("hola mundo"));
console.log(frequencies("anita lava la tina"));