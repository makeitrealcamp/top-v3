function harmonicSum(n) {
    if (n === 1) {
        return 1
    } else {
        return (1 / n) + harmonicSum(n - 1);
    }
}
console.log(harmonicSum(1)); // 1
console.log(harmonicSum(2)); // 1 + 1/2 = 1.5
console.log(harmonicSum(3)); // 1 + 1/2 + 1/3 = 1.833333