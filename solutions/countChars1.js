function countABs(str){
  let obj={
    a: 0,
    b: 0,
  }
  for (let i = 0; i<str.length; i++){
    if (str[i].includes("a")){
      obj.a++;
    }
    if (str[i].includes("b")){
      obj.b++;
    }
  }
  return obj
}

console.log(countABs("aaabbb"));
console.log(countABs("abc"));
console.log(countABs("zxy"));
