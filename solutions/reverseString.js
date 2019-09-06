/*
# Reverse String

Write a function called `reverseString` that receives a string and returns the reversed string.

**Note:** Use recursion to solve this exercise.

```javascript
reverse("hello world"); // "dlrow olleh"
```
 */

 function reverseString(str) {
     if (str.length===0){
         return '';
     }
     return reverseString(str.slice(1))+str[0]
 }

console.log(reverseString("hello world")); // "dlrow olleh"
