var frequencies = function(string) {
  str = string.replace( /\s/g, '')
  var result = {}
  for (var i=0; i < str.length; i++) {
    var char = str[i];
    var number_of_char = find_char(str, char)
    result[char] = number_of_char
  }
  return result
}

var find_char = function(string, char){ 
  return (string.split(char).length - 1)
}

console.log(frequencies("hola mundo"))
console.log(frequencies("anita lava la tina"))
