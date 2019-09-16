
// # Search Tree

// [Guías de Make it Real]
// (https://guias.makeitreal.camp/algoritmos/estructuras-de-datos#ejercicio)

//     Van a implementar:

//         * `add`
//         * `traverseDFS`

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
}

const tree = new binaryTree();
tree.add(4);
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(3);
tree.traverseDFS(function (e) { console.log(e); })