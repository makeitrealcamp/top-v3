# Unique BST

[Leetcode](https://leetcode.com/problems/unique-binary-search-trees/submissions/).

Modify the following solution to add memoization (dynamic programming):

```javascript
var numTrees = function(n) {
    if (n <= 1) return 1;

    var total = 0;
    for (var i=1; i <= n; i++) {
        total += numTrees(i-1) * numTrees(n-i);
    }

    return total;
};
```
