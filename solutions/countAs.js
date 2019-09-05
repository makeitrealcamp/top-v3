let countAs = function(str) {
  return count_char(str, 0, "a");
}

let count_char = function(str, count, char) {
  if (str.length === 0) {
    return count;
  }

  let last_char = str.slice(-1);
  if (char === last_char) {
    count += 1;
  }

  return count_char(str.substring(0, str.length -1), count, char)
}


console.log(countAs("aaabbb"));
console.log(countAs("abc"));
console.log(countAs("xst"));
