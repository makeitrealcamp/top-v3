function addArray(array) {
    if (array.length === 0) {
        return 0;
    }
    return array.splice(0, 1)[0] + addArray(array);
}
console.log(addArray([1, 2, 3, 4]));