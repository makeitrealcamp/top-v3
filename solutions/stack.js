// # Stack
//
// Write a constructor function called `Stack` with no arguments. 
// It should initialize two attributes:
//
// * `head` with `null`
// * `size` with `0`
//
// The methods that you will implement are:

// * `push`
// * `pop`
// * `size`

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
            return "pushed";
        }
        node.ref = head; // for stacks with elements
        head = node;
        size++;
        return "pushed";
    }
    this.pop = function () {
        var element = head;
        if (size === 0) { // for empty stacks
            return "Empty stack";
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


// tests
var stack = new Stack();
console.log(stack.push(5));
console.log(stack.length());
console.log(stack.push(8));
console.log(stack.length());
console.log(stack.pop()); // 8
console.log(stack.pop()); // 5
console.log(stack.pop()); // null
console.log(stack.length()); // 0