function fibonacci(n) {
    //trivial cases
    if(n===0){
        return 1;
    }
    if(n===1){
        return 1;
    }
    //Non-trivial cases
    return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(6));