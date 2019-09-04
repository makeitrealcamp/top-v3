function printNumsBackwards(num){
    //Print current number
    console.log(num);
    //Trivial case
    if(num===1){
        return;
    }
    //Decrease and start over
    printNumsBackwards(num-1);
}
printNumsBackwards(10);