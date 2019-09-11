var hasPathSum = function (root, sum) {
    // Caso Trivial
    if (!root) return false;
    if (!root.left && !root.right) return root.val == sum;

    // Caso General
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}
