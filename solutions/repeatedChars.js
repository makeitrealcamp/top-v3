/*# Repeated Characters

Write a function called `repeatedChars` that receives two strings and returns a new string with the characters that are repeated in both input strings:

```javascript
repeatedChars("german", "gabriela"); // "gear"
```
*/

var repeatedChars = function(str1, str2){
    str2 =  str2.split('').reduce((a,b)=> (a[b]='',a),{}); 
    let ans=[]
    for (let i=0;i < str1.length ;i++) {
        if ( str2.hasOwnProperty(str1[i])){
            ans.push(str1[i])
        }
    }
    return ans.join('')
}

console.log(repeatedChars("german", "gabriela"));
console.log(repeatedChars("roman", "ramon"));