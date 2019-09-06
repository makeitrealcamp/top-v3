function addNumsNestedArray(arr){

    function flatten(arr){ // para aplanar el array
        var result = []

        function flt(arr) {
            for (let i=0; i<arr.length;i++) {
                var e = arr[i]
                if  (Array.isArray(e)){
                    flt(e)
                } else {
                    result.push(e)
                }
            }
            return result
        }
        return flt(arr)
    }

    let newArr = flatten(arr)   
    
    function addNumsArray(newArr){
        // caso trivial
        if (newArr.length === 1){
            return 
        }
        //caso general
        else if (newArr.length>1){
            let a = parseInt(newArr.splice(newArr.length-1, 1))// para guardar el ultimo elemento
            let b = parseInt(newArr.splice(newArr.length-1, 1))// para guardar el penultimo elemento
            newArr.push(a+b)//agrego al final la suma del ultimo y el penultimo
            addNumsArray(newArr)
        }
        return newArr[0]
    }

    console.log(addNumsArray(newArr))
}

addNumsNestedArray([1, [2, 3], 4])
addNumsNestedArray([1, [1, 1], [1, [1, 1]], 1])