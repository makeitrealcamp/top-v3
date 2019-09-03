/* Input Strings
Output: New string with repeated characters
1. Create a function named repeatedChars
2. create a new variable to keep the new String with the repeated characters.
3. Write a loop to runs the length of one argument
4. Create a condition to idetify the repeated charts in both of the strings.
5. Push the repeated charts in the new string.
6. Return the new string */
function repeatedChars (a,b){
  let char = "";
  for (let i =0; i<a.length; i++){
    if (b.indexOf(a[i]) > -1){
      char = char.concat(a[i]);
    }
  }
  return char
}
console.log(repeatedChars("german", "gabriela"));
