// # Node

// Write a constructor function called `Node` that 
//receives a value and another node, and initializes the attributes`value` and`ref` 
//respectively.

function Node(value, ref) {
    this.value = value
    this.ref = ref
}

var n4 = new Node(4);
var n3 = new Node(3, n4);
var n2 = new Node(2, n3);
var n1 = new Node(1, n2);

var node = n1;
while (node) {
    console.log(node.value);
    node = node.ref;
}

// should print:
// 1
// 2
// 3
// 4


// The objects created with the constructor function Node are going to be used in 
//multiple data structures such as linked lists, trees, stacks, queues and graphs.
