function Node(value) {
    this.value = value;
    this.left = null
    this.right = null
}
function BinaryTree() {
    this.root = null;
    this.add = function (value) {
        if (this.root === null) {
            this.root = new Node(value)
        } else {
            tree(value, this.root)
        }
    }
}

function tree(value, dest) {

    if (value < dest.value) { // Value assigned to left
        if (dest.left === null) {
            dest.left = new Node(value);
        }
        else {
            tree(value, dest.left);
        }
    }
    else { //Value assigned to right
        if (dest.right === null) {
            dest.right = new Node(value);
        }
        else {
            tree(value, dest.right);
        }
    }
}

let myTree = new BinaryTree();
myTree.add(4);
myTree.add(2);
myTree.add(7);
myTree.add(1);
myTree.add(3);

console.log(myTree);
console.log(myTree.root.left);
console.log(myTree.root.right);
