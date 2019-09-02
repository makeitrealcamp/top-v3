var countABs = function(string) {
  var result = {}
  for (var i=0; i < string.length; i++) {
    var char = string[i];
    var number_of_char = find_char(string, char)
    result[char] = number_of_char
  }
  return result
}

var find_char = function(string, char){ 
  return (string.split(char).length - 1)
}

console.log(countABs("zxy"))
console.log(countABs("aaabbb"))
console.log(countABs("abc"))
