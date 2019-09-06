//rse String.js

 // Write a function called `reverseString` that receives a string and returns the reversed string.

// **Note:** Use recursion to solve this exercise.


function reverseString (str){
  if (str.length === ""){
    return str
  } if (str.length > ""){
  function reverseRecusrive (str, ord){
    for (let i=0; i<str.length; i++){
     ord[i] = str.split("").splice(str.length-1)
        str[0] = ord[0]
  }
}
  return reverseString(str)
}

//javascript
console.log(reverseString("hello world")) // "dlrow olleh"
