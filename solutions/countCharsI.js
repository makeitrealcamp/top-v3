function countABs(strComparar){
    var vectorAB = {a:0, b:0}; 
    for(var i=0; i<strComparar.length; i++){
        if('a'.indexOf(strComparar[i])>-1){
            vectorAB.a++; 
        }else{
            if('b'.indexOf(strComparar[i])>-1){
                vectorAB.b++; 
            }
        }
    }
    return vectorAB; 
}

console.log(countABs("aaabbb")); // { a: 3, b: 3 }
console.log(countABs("abc")); // { a: 1, b: 1 }
console.log(countABs("zxy")); // { a: 0, b: 0 }