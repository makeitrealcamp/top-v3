# Inverse Tree

Add a method called `inverse` to the binary tree that inverses the tree.

```javascript
const tree = new BinaryTree();
tree.add(4);
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(3);
tree.add(5);

tree.inverse();

tree.traverseDFS(function(e) {
  console.log(e);
});


function Node (value, left, right){
 this.value = value;
 this.left = null
 this.right = null
}
function BinaryTree (){
 this.root = null;
 this.add = function(value){
   const node = this.root
   if (node === null){
     this.root = new Node(value)
     return
   } else {
     const tree = function(node){
       if (value < node.value){
         if (node.left === null){
           node.left = new Node(value)
           return
         } else if (node.left !== null){
           return tree(node.left)
         } else {
           if (node.right === null){
             node.right = new Node(value)
             return
         } else if (node.right !== null) {
         return tree(node.right)
       } else {
         return null
       }
       }
       return tree(node)
     }
   }
 }
}
// 4
// 7
// 5
// 2
// 3
// 1
```
