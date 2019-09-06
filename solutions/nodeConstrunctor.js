function Node(value, ref) {
    this.value = value;
    this.ref = ref;
}

var n5 = new Node(5)
var n4 = new Node(4, n5);
var n3 = new Node(3, n4);
var n2 = new Node(2, n3);
var n1 = new Node(1, n2);

var node = n1;
while (node.value) {
    console.log(node.value);
    if (node.ref) {
        node = node.ref;
    } else {
        break;
    }
}