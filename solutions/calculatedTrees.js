/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    if (calculatedTrees[n]) return calculatedTrees[n];

    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += numTrees(i - 1) * numTrees(n - i);
    }
    calculatedTrees[n] = total;
    return total;
};

var calculatedTrees = { 0: 1, 1: 1 };