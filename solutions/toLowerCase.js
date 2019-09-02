/**
 * @param {string} str
 * @return {string}
 */

 // No utilices el método `toLowerCase` de JavaScript.
var toLowerCase = function(str) {
  var s = "";
  for (var i = 0; i < str.length; i++) {
    var codigo = str.charCodeAt(i);
    if (codigo >= 65 && codigo < 91) {
      codigo += 32;
    }
    s += String.fromCharCode(codigo);
  }
  return str + " => " + s;
};

console.log(toLowerCase("HelLo"));
console.log(toLowerCase("HelLo WORLd"));
