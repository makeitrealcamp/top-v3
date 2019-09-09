# Hanoi Tower with Stack

You are going to modify the Hanoi Tower algorithm to use a `Stack` (the one you implemented) instead of an array.

```javascript
function hanoi(disks, src, aux, dest) {
  if (disks === 0) return;

  hanoi(disks - 1, src, dest, aux);
  dest.push(src.pop());
  hanoi(disks - 1, aux, src, dest);
}

var t1 = [4, 3, 2, 1]; // change for a stack
var t2 = []; // change for a stack
var t3 = []; // change for a stack

hanoi(4, t1, t2, t3);
console.log("T1: ", t1);
console.log("T2: ", t2);
console.log("T3: ", t3);
```
