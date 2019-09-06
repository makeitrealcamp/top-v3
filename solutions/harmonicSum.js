function harmonicSum(num) {
    // casos triviales
    if (num < 1) {
        return 0
    }

    // caso general
    return (1 / num) + harmonicSum(num - 1)
}

console.log(harmonicSum(3))              