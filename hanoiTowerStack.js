//You are going to modify the Hanoi Tower algorithm to use a Stack (the one you
// implemented) instead of an array.

const Stack = require ('./stackNode')

function hanoi(disks, src, aux, dest) {
   if (disks === 0) return;
   hanoi(disks - 1, src, dest, aux);
   dest.push(src.pop());
   hanoi(disks - 1, aux, src, dest);
 }
 var t1 = new Stack(); // change for a stack
 t1.push(4)
 t1.push(3)
 t1.push(2)
 t1.push(1)
 var t2 = new Stack();; // change for a stack
 var t3 = new Stack();; // change for a stack
hanoi(4, t1, t2, t3);
console.log("T1: ", t1);
console.log("T2: ", t2);
console.log("T3: ", t3);
