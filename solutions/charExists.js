var charExists = function(str, char) {
  if (str.length === 0) {
    return false
  }
  
  if (str.substring(0,1) === char) {
    return true
  } else {
    return charExists(str.substring(1, str.length), char)
  }
}


console.log(charExists("hello", "l"))
console.log(charExists("hello", "i"))
