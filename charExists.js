/* # Character Exists?

Write a function called `charExists` that receives two arguments: a string and a character. It returns true if the character exists in the string, false otherwise.

**Note:** Use recursion to solve this exercise. */

function charExists (str, char){
  if (str.length < 1){
    console.log(false)
    return false
  }
  str2 = Array.from(str).splice(0,1).join("")
  if (str2 === char){
    console.log(true)
    return true
  }
  str = Array.from(str).splice(1,str.length).join("")
  charExists(str,char)
}

charExists("hello", "l"); // true
charExists("world", "n"); // false
