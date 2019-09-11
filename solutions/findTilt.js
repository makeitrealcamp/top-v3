/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
    if (root) {
        let totalTilt = tiltNode(root);
        if (root.right) {
            totalTilt += findTilt(root.right)
        }
        if (root.left) {
            totalTilt += findTilt(root.left)
        }
        return totalTilt;
    }
    return 0;
};

function sumNode(node) {
    if (node) {
        let sum = node.val;
        if (node.right) {
            sum += sumNode(node.right);
        }

        if (node.left) {
            sum += sumNode(node.left);
        }
        return sum;
    }
    return 0;
}

function tiltNode(node) {
    if (node.left && node.right) {
        return Math.abs(sumNode(node.left) - sumNode(node.right));
    }

    if (node.left) {
        return Math.abs(sumNode(node.left));
    }

    if (node.right) {
        return Math.abs(sumNode(node.right));
    }

    return 0;
}
