/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    if (root) {
        if (root.val >= L && root.val <= R) {
            return root.val + rangeSumBST(root.right, L, R) + rangeSumBST(root.left, L, R)
        }
        else {
            return rangeSumBST(root.right, L, R) + rangeSumBST(root.left, L, R)
        }
    }
    else {
        return 0
    }
}