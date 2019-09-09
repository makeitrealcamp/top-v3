// # Hanoi Tower with Stack

// You are going to modify the Hanoi Tower algorithm to use a`Stack`(the 
// one you implemented) instead of an array.

function Node(value) { // to create the node
    this.value = value
    this.ref = null
}

function Stack() {
    var head = null;
    var size = 0;

    this.push = function (value) {
        const node = new Node(value);// creating the node
        if (head === null) { // for empty Stacks
            head = node;
            size++;
            return;
        }
        node.ref = head; // for stacks with elements
        head = node;
        size++;
    }

    this.pop = function () {
        var element = head;
        if (size === 0) { // for empty stacks
            return null;
        } else {
            head = head.ref;
            size--;
            return element.value;
        }
    }
    this.length = function () {
        return size;
    }
}

// Hanoi

function hanoi(disks, src, aux, dest) {
    if (disks === 0) return;

    hanoi(disks - 1, src, dest, aux);
    dest.push(src.pop());
    hanoi(disks - 1, aux, src, dest);
}

var t1 = new Stack(); // change for a stack
t1.push(4);
t1.push(3);
t1.push(2);
t1.push(1);

var t2 = new Stack(); // change for a stack
var t3 = new Stack(); // change for a stack

hanoi(4, t1, t2, t3);
console.log("T1: ", t1.length());
console.log("T2: ", t2.length());
console.log("T3: ", t3.length());

console.log(t3.pop()); // 1
console.log(t3.pop()); // 2
console.log(t3.pop()); // 3
console.log(t3.pop()); // 4