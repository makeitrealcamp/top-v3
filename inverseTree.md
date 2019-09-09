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

// 4
// 7
// 5
// 2
// 3
// 1
```
