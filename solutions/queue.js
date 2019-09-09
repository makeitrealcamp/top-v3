// # Queue

// Write a constructor function called `Queue` with no arguments.It should initialize three attributes:

// * `head` with `null`
// * `tail` with `null`
// * `size` with `0`

// The methods that you will implement are:

// * `enqueue`
//     * `dequeue`
//     * `size`

function Node(value) {
    this.value = value
    this.ref = null
}

function Queue() {
    var head = null
    var tail = null
    var size = 0
    // enque Method
    this.enqueue = function (value) {
        const node = new Node(value)
        if (head === null) {
            head = node
            tail = node
        } else {
            tail.ref = node
            tail = node
        }
        size++
        return "enqueued"
    }
    // dequeue method
    this.dequeue = function () {
        var element = head
        if (size === 0) {
            return "Empty Queue"
        }
        head = head.ref
        size--
        return element
    }
    this.size = function () {
        return size
    }

}

var queue = new Queue();
console.log(queue.enqueue(4));
console.log(queue.enqueue(2));
console.log(queue.dequeue()); // returns the first element of the queue
console.log(queue.size()); // returns the size of the queue
console.log(queue.dequeue());
