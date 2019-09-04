function printNumbers(num) {    
    //trivial case
    if(num===1){
        console.log(1);
    }
    //Decrease and print after exiting recursivity
    else{
        printNumbers(num-1);
        //Print after exit
        console.log(num);
    }
}
printNumbers(50);
