function repeatedChars(strComparando, strComparar){
    var strRepetidos = ""; 
    for(var i=0; i<strComparando.length; i++){
        if(strRepetidos.indexOf(strComparando[i])==-1){
            for(var j=0; j<strComparar.length; j++){
                if(strRepetidos.indexOf(strComparar[j])==-1){
                    if(strComparando[i]==strComparar[j]){                
                        strRepetidos += strComparando[i]; 
                    }
                }
            }
        }
    }
    return strRepetidos; 
}

console.log(repeatedChars("german", "gabriela"))