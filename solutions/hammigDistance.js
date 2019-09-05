function hammingDistance(n, m) {
    let counter = 0;
    let bit = n ^ m;
    while (bit != 0) {
        counter += bit % 2;
        bit = bit >> 1;
    }
    return counter;
}
console.log(hammingDistance(1, 4));