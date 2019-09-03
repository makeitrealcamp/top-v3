// # Count Chars II
//
// Write a function called `frequencies` that receives a string and returns an
// object with the number of times each character appears in the string (except the blank space).
//
// ```javascript
// frequencies("hola mundo"); // { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }
// frequencies("anita lava la tina"); // { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }
// ```

function countCharsII(str) {
  var arr = [];
  var chars = [];
  var objeto = {};
  for(var i = 0; i < str.length; i++) {
    if(!chars.includes(str[i])) {
      chars.push(str[i]);
    }
  }
  console.log(chars);

  for(var i = 0; i < chars.length; i++) {
    var pos = str.indexOf(chars[i])
    var cont = 0;

    while (pos != -1) {
      cont++;
      pos = str.indexOf(chars[i], pos + 1);
    }
    arr.push(cont);
    objeto.chars[i] = cont;
    console.log(objeto);
  }
  return objeto;
}
console.log(countCharsII("Hola mundo"));
console.log(countCharsII("Anita lava la tina"));
