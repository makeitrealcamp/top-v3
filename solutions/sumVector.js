function sumVector(array,sum){
    let comp= new Set();
    for(let i=0; i<array.length;i++){   
      if(!comp.has(array[i])){    
        comp.add(sum-array[i])
      } else {        
      return true 
      }     
    }    
    return false
  }
  
  console.log(sumVector([3, 34, 2, 12, 5, 4],9))