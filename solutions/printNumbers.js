var printNumbers = function(n) {

  if (n > 0) {
    printNumbers(n - 1) ;
    console.log(n)
  }
  
  return n
}

printNumbers(10)
