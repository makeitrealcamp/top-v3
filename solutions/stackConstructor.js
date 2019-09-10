function Node(value) {
  this.value = value;
  this.ref = null;
}

function Stack() {
  this.head = null;
  this.length = 0;

  this.push = function(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      node.ref = this.head;
      this.head = node;
    }
    
    this.length++;
  }

  this.pop = function() {
    if (this.length > 0) {
      let node = this.head;
      this.head = node.ref;
      this.length--;
      return node.value
    } else {
      return null
    }
  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop()); // returns the first element of the queue
console.log(stack.pop()); // returns the first element of the queue
console.log(stack.pop()); // returns the first element of the queue
console.log(stack.pop()); // returns the first element of the queue
console.log(stack.length); // returns the size of the queue
