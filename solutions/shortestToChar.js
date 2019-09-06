var shortestToChar = function(S, C) {
  let result = [];
  for(let i = 0 ; i < S.length ; i++){
    let count = 0;
    while(result[i] === undefined){
      if(S[i + count] === C || S[i - count] === C){
        result[i] = count;
      }
      count++;
    }
  }
  return result;
}

console.log(shortestToChar("aaaaeaaaa", "e"))
