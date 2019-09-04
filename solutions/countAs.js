function countAs(str) {
    return countCharsRecursive(str, "a", 0);
}
function countCharsRecursive(str, char, count) {
    //trivial solution: the first char of the string and char are the same
    if (char === str[0]) {
        count++;
    }
    //non-trivial solution: remove the first char and call again
    if (str.length != 0) {
        count = countCharsRecursive(str.substring(1), char, count);
    }
    //console.log("Made to return, Count:"+count);
    return count;
}
console.log(countAs("aaaaaaa"));
console.log(countAs("aaasssss"));
console.log(countAs("ñlkjrt"));