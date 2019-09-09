# Search Tree

[Guías de Make it Real](https://guias.makeitreal.camp/algoritmos/estructuras-de-datos#ejercicio)

Van a implementar:

* `add`
* `traverseDFS`


```javascript
const tree = new BinaryTree();
tree.add(4);
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(3);
```

```javascript
tree.traverseDFS(function(e) { console.log(e); });
// 4
// 2
// 1
// 3
// 7
// 5
```
