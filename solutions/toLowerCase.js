var toLowerCase = function(string) {
  var result = ""

  for (var i = 0; i < string.length; i++) {

    var code = string.charCodeAt(i)

    if (code > 64 && code < 91) {
      result += String.fromCharCode(code + 32)
    } else {
      result += string[i]
    }
  }

  return result
}

console.log(toLowerCase("asdASD"))
