function printNumsBackwards(num){
    // Caso trivial: 1
    if (num <= 1){
        console.log(1)
        return
    }
    // Caso general
    console.log(num)
    printNumsBackwards(num - 1)
}
    ​
printNumsBackwards(500)