function flatten(input) {
    let output = [];
    if(arrayOfArrays(input)){
        input.forEach(element => {
            output=output.concat(element);
        });
        return flatten(output);
    }else{
        return input;
    }
}
function arrayOfArrays(array){
    let bool = false;
    array.forEach(element => {
        bool=bool||Array.isArray(element);
    });
    return bool;
}
console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]