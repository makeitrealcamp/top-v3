// # Search BST

// Add a method called`search` on the`BinaryTree` that receives un number
// and returns true if the number is on the tree, false otherwise.


function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function binaryTree() {
    this.root = null;

    this.compare = function (nodeValue, currentValue) {
        return nodeValue > currentValue ? true : false;
    }
    //add

    this.insert = function (node, value) {
        if (this.compare(node.value, value)) {
            if (node.left === null) {
                node.left = new Node(value);
            } else {
                this.insert(node.left, value);
            }

        } else {
            if (node.right === null) {
                node.right = new Node(value);
            } else {
                this.insert(node.right, value);
            }
        }

    }
    this.add = function (value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            this.insert(this.root, value);
        }
    }

    this.traverseDFS = function (fn) {
        this.traverse(this.root, fn);
    }

    this.traverse = function (node, fn) {
        if (node != null) {
            fn(node.value)
            this.traverse(node.left, fn);
            this.traverse(node.right, fn);
        }
    }

    this.search = function (num) {
        if (root === null) return false;
        // caso trivial
        if (root.left === null && root.right === null) {
            return root.value === num;
        }
        if (num < root.value) {
            root = root.left;
            return this.search(num)
        } if (num > root) {
            root = root.right
            return this.search(num);
        }
        return false;
    }
}

const tree = new binaryTree();
tree.add(4);
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(3);

console.log(tree.search(7));// true
console.log(tree.search(10));// false