function isBalanced(str) {
  let stackOpen = new Stack();
  let stackClose = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "(") {
      stackOpen.push("(");
    } else if ( str.charAt(i) === ")") {
      stackClose.push(")");
    }
  }

  return stackOpen.length === stackClose.length;
}

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

console.log(isBalanced("((()))"))
