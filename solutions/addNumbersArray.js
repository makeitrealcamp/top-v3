function addNumsArray(arr){
    // caso trivial
    if (arr.length === 1){
        return 
    }
    //caso general
    else if (arr.length>1){
        let a = parseInt(arr.splice(arr.length-1, 1))// para guardar el ultimo elemento
        let b = parseInt(arr.splice(arr.length-1, 1))// para guardar el penultimo elemento
        arr.push(a+b)//agrego al final la suma del ultimo y el penultimo
        addNumsArray(arr)
    }
    return arr[0]
}

console.log(addNumsArray([1, 2, 3, 4]))
console.log(addNumsArray([15, 3, 2]))
