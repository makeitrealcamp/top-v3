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

  this.add = function(value) {
    let node = new Node(value);

    if(this.root === null) {
      this.root = node;
    } else {
      this.addNode(this.root, node);
    }
  }

  this.addNode = function(root, node) {
    if (node.value < root.value) {
      if (root.left) {
        this.addNode(root.left, node);
      } else {
        root.left = node;
      }
    } else {
      if (root.right) {
        this.addNode(root.right, node);
      } else {
        root.right = node;
      }
    }
  }

  this.search = function(value) {
    return (this.searchValue(value, this.root))
  }

  this.searchValue = function(value, root) {
    if (!root) return false;
    if (value === root.value) return true;

    if (value < root.value) {
      return this.searchValue(value, root.left);
    }
    
    if (value > root.value) {
      return this.searchValue(value, root.right);
    }

    return false;
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

console.log(tree.search(10));
