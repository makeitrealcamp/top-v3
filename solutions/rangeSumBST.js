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

 function Node(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

function BinaryTree() {
  this.root = null;

  this.add = function add(value) {
    let node = new Node(value);

    if(this.root === null) {
      this.root = node;
    } else {
      searchTree(this.root, node);
    }

  }
}

// Recursive function
function searchTree(root, node) {
  if (node.value < root.value) {
    if (root.left) {
      searchTree(root.left, node);
    } else {
      root.left = node;
    }
  } else {
    if (root.right) {
      searchTree(root.right, node);
    } else {
      root.right = node;
    }
  }
}

var rangeSumBST = function(root, L, R) {
  return rangeSum(root.root, L, R, L + R)
};

var rangeSum = function(root, L, R, sum) {
  if (!root) return sum;

  if (root.value > L && root.value < R) {
    sum += root.value;
  }

  sum = rangeSum(root.left, L, R, sum)
  sum = rangeSum(root.right, L, R, sum)
  
  return sum;
}

const tree = new BinaryTree();
(tree.add(10));
(tree.add(5));
(tree.add(15));
(tree.add(3));
(tree.add(7));
(tree.add(11));
(tree.add(9));


console.log(rangeSumBST(tree, 7, 15))
