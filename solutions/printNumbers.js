function printNumbers(n){

    function printNumber(num){ // otra función 
        console.log(num) // Caso general
        if (num < n) {
           printNumber(num + 1) // Caso trivial
        }
      }
    printNumber(1)
}

printNumbers(50)
