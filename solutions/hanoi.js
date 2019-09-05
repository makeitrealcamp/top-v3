function hanoi(disks, src, aux, dest) {
  if (disks === 0) return;

  hanoi(disks - 1, src, dest, aux);
  dest.push(src.pop());
  hanoi(disks - 1, aux, src, dest);
}

var t1 = [4, 3, 2, 1];
var t2 = [];
var t3 = [];

hanoi(4, t1, t2, t3);
console.log("T1: ", t1);
console.log("T2: ", t2);
console.log("T3: ", t3);
