function addNumsNestedArray(array) {
    if (array.length === 0) {
        return 0;
    }
    if (Array.isArray(array[0])) {
        return addNumsNestedArray(array.splice(0, 1)[0]) + addNumsNestedArray(array);
    } else {
        return array.splice(0, 1)[0] + addNumsNestedArray(array);
    }
}
console.log(addNumsNestedArray([1, [1, 1, 1], [1, [1, 1]], 1])); // 7