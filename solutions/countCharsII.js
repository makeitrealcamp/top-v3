function frequencies(strContar){
    var strRepetidos=[]; 
    for(var i=0; i<strContar.length; i++){
        if(strRepetidos.indexOf(strContar[i])==-1&&strContar[i]!==" "){
            strRepetidos[strContar[i]]=0; 
            for(var j=0; j<strContar.length; j++){
                if(strContar[i]==strContar[j]){                
                    strRepetidos[strContar[i]]++; 
                }
            }
        }
    }
    return strRepetidos; 
}

console.log(frequencies("hola mundo")); // { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }
console.log(frequencies("anita lava la tina")); // { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }