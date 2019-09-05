function printNumbers(n) {
    function printNumber(num) {
        console.log(num) // Caso trivial
        if (num < n) {
            printNumber(num + 1) // Caso General
        }
    }
    printNumber(1)
}
printNumbers(10)