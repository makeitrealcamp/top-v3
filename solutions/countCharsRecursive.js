/*# Count Chars

Write a function called `countAs` that receives a string and returns the number of A's in the string.

**Note:** Use recursion to solve this exercise.

```javascript
countAs("aaabbb"); // 3
countAs("abc"); // 1
countAs("zxy"); // 0
```
*/

function countAs (str) {
    let pos=0;
    var num=0;
    return countAs(str,pos)
    function countAs(str,pos) {
        if (pos >= str.length) {
            ///console.log(num)
            return num
        }
        if (str[pos] ==='a') {
            num++
        }
        countAs(str,pos+1)
    }
}

countAs("aaabbb"); // 3
countAs("abc"); // 1
countAs("zxy"); // 0
