function Node(value) {
    this.value = value;
    this.left = null
    this.right = null
    this.inverse = function (){
      if (this.left === null && this.right === null){
        return
    } else {
      let aux = this.left
      this.left = this.right
      this.right = aux
      if (this.right !== null){
      this.right.inverse()
    }
      if (this.left !== null){
        this.left.inverse()
    }
  }
}
}
function BinaryTree() {
    this.root = null;
    this.add = function (value) {
        if (this.root === null) {
            this.root = new Node(value)
        } else {
            treeLocalization(value, this.root)
        }
    }
    this.traverseDFS = function (fn){
      traverse(this.root, fn)
    }
    this.inverse = function(){
      this.root.inverse()
    }
}
function traverse (node, fn){
  fn (node.value)
  if (node.left !== null){
    traverse(node.left, fn)
  }
  if (node.right !== null){
    traverse(node.right, fn)
  }

}

function treeLocalization(value, dest) {

    if (value < dest.value) { // Value assigned to left
        if (dest.left === null) {
            dest.left = new Node(value);
        }
        else {
            treeLocalization(value, dest.left);
        }
    }
    else { //Value assigned to right
        if (dest.right === null) {
            dest.right = new Node(value);
        }
        else {
            treeLocalization(value, dest.right);
        }
    }
}

let myTree = new BinaryTree();
myTree.add(4);
myTree.add(2);
myTree.add(7);
myTree.add(1);
myTree.add(3);
myTree.add(5);

myTree.traverseDFS(function(e) { console.log(e); });
// 4
// 2
// 1
// 3
// 7
// 5

myTree.inverse();

myTree.traverseDFS(function(e) {
  console.log(e);
})
