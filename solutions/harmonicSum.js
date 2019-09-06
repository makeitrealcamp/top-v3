function harmonicSum(num) {
    num = parseInt(num)
    if (num === 2) {
        sum += 1.5
        return sum
    } else if (num === 1) {
        sum = 1
        return sum
    }
    let sum = (1 / num) + harmonicSum(num - 1)
    return sum
}

console.log(harmonicSum(4))