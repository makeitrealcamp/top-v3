function reverse(str) {
    return reverseArrayRecursive(str.split(""), []).join("");
}
function reverseArrayRecursive(array, reversed) {
    if (array.length === 0) {
        return reversed;
    }
    reversed.push(array.splice(array.length - 1, 1)[0]);
    return reverseArrayRecursive(array, reversed)
}
console.log(reverse("hello world")); 