var toLowerCase = function(str) {
  var result = ''
  for (var i = 0; i < str.length; i++) {
  	var code = str.charCodeAt(i)
    if (code > 64 && code < 91) {
      result += String.fromCharCode(code + 32)
    } else {
      result += str.charAt(i)
    }
  }
  return result
};

console.log(toLowerCase("LOVELY"))
