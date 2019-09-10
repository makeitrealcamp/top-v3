// # Search Tree
//
// [Guías de Make it Real](https://guias.makeitreal.camp/algoritmos/estructuras-de-datos#ejercicio)
//
// Van a implementar:
//
// * `add`
// * `traverseDFS`

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

  this.inverse = function() {
    inverseTree(this.root);
  }

  this.traverseDFS = function(fn) {
    printNodeDFS(this.root, fn);
  }

  this.traverseBFS = function(fn) {
    if (this.root) {
      fn(this.root.value)
      printNodeBFS(this.root, fn);
    }
  }
}

function inverseTree(node) {
  if (!node) {
    return;
  }

  let right = inverseTree(node.right);
  let left = inverseTree(node.left);

  node.left = right;
  node.right = left;
  return node;
}

// Recursive function
function printNodeDFS(node, fn) {
  if (!node) {
    return;
  }

  fn(node.value);
  printNodeDFS(node.left, fn);
  printNodeDFS(node.right, fn);
}

function printNodeBFS(node, fn) {
  if (!node) {
    return;
  }

  if (node.left) {
    fn(node.left.value);
  }

  if (node.right) {
    fn(node.right.value);
  }

  printNodeBFS(node.left, fn);
  printNodeBFS(node.right, fn);

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

// Test
const tree = new BinaryTree();
(tree.add(4));
(tree.add(2));
(tree.add(7));
(tree.add(3));
(tree.add(5));
(tree.add(1));
(tree.add(9));

/// javascript
//tree.traverseDFS(function(e) { console.log(e); });
tree.traverseBFS(function(e) { console.log(e); });
// 4
// 2
// 1
// 3
// 7
// 5

tree.inverse();
//tree.traverseDFS(function(e) { console.log(e); });
