function BinaryTree() {
    this.root = null;
    this.add = function (value) {
        if (this.root == null) {
            this.root = new BinaryNode(value);
        } else {
            this.root.add(value);
        }
    };
    this.traverseDFS = function (fn) {
        this.root.nodeTraverseDFS(fn);
    };
    this.inverse = function () {
        this.root.nodeInverse();
    };
    this.search = function (value) {
        if (this.root) return this.root.nodeSearch(value);
        return false;
    }
}

function BinaryNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.add = function (value) {
        if (value >= this.value) {
            if (this.right == null) {
                this.right = new BinaryNode(value);
            } else {
                this.right.add(value);
            }
        } else {
            if (this.left == null) {
                this.left = new BinaryNode(value);
            } else {
                this.left.add(value);
            }
        }
    };
    this.nodeTraverseDFS = function (fn) {
        fn(this.value);
        if (this.left != null) {
            this.left.nodeTraverseDFS(fn);
        }
        if (this.right != null) {
            this.right.nodeTraverseDFS(fn);
        }
    };
    this.nodeInverse = function () {
        if (this.left != null || this.right != null) {
            let aux = this.left;
            this.left = this.right;
            this.right = aux;
            if (this.left != null) {
                this.left.nodeInverse();
            }
            if (this.right != null) {
                this.right.nodeInverse();
            }
        }
    };
    this.nodeSearch = function (value) {
        if (this.value === value) return true;
        if (this.right) return this.right.nodeSearch(value);
        if (this.left) return this.left.nodeSearch(value);
        return false;
    }
}

const tree = new BinaryTree();
tree.add(4);
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(3);
tree.add(5);

console.log("8: " + tree.search(8));

tree.traverseDFS(function (e) {
    console.log(e);
});
tree.inverse();

tree.traverseDFS(function (e) {
    console.log(e);
});