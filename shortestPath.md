# Shortest Path

Write a function called `shortestPath` that finds the shortest path between two nodes given an adjacency matrix. if there is no route return -1.

```javascript
var mat = [
[0, 10, 5, 0],
[0, 0, 0, 3],
[0, 4, 0, 6],
[0, 0, 0, 0]
]
shortestPath(mat, 0, 3); // 11
shortestPath(mat, 2, 0); // -1
```

What changes would we need to do if we change the graph to allow cycles?
