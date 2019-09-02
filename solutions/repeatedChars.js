var repeatedChars = function(str1, str2){
  result = ""
 
  for (var i=0; i < str1.length; i++) {
    var char = str1[i];
    if (str2.indexOf(char) != -1) {
      result = result + char
    }
  }

  return result
}

console.log(repeatedChars("german", "gabriela"))
console.log(repeatedChars("valentina", "esteban"))
