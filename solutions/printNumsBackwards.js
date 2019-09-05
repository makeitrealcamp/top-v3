var printNumsBackwards = function(n) {
  console.log(n)

  if (n === 1) {
    return 1;
  }
  
  printNumsBackwards(n - 1)
}

printNumsBackwards(10)
