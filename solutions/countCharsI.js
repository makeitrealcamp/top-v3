// Count Chars I

// Write a function called `countABs` that receives a string and returns an
// object with the number of **a's** and the number of **b's**.

function countABs(str) {
  var ca = 0;
  var cb = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] === "a") {
      ca++;
    } else if(str[i] === "b") {
      cb++;
    }
  }
  var objeto = {a: ca, b: cb}
  return objeto;
}

console.log(countABs("aaabbb")); // { a: 3, b: 3 }
console.log(countABs("abc")); // { a: 1, b: 1 }
console.log(countABs("zxy")); // { a: 0, b: 0 }
