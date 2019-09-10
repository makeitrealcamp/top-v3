function Node(value) {
    this.value = value;
    this.ref = null;
}

function Queue() {
    this.head = null;
    this.tail = null;
    this.length = 0;


    //Adds a new node at the start of the Queue
    this.enQueue = function (value) {
        let node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.ref = node;
            this.head = node;
        }
        this.length++;
    }

    //Returns the value of tail and tail is the ref of previous tail
    this.deQueue = function () {
        if (this.tail) {
            let node = this.tail;
            this.tail = node.ref;
            this.length--;
            return node.value;
        } else {
            return null;
        }
    }
}

var queue = new Queue();
queue.enQueue(4);
queue.enQueue(5);
console.log(queue.head.value);
console.log(queue.tail.value);
console.log(queue.deQueue()); // returns the first element of the queue
console.log(queue.length); // returns the size of the queue