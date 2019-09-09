function Node (value){
  this.value = value
  this.next = null
}

function Stack (){
  this.items = null
  this.index = 0
  this.length = 0
  this.push = function (value){
    const node = new Node (value)
    if (this.items === null){
      this.items = node
    } else {
      var current = this.items
      node.next = current
      this.items = node // Si no es vacía se añade a la cabeza que es el node
    }
    this.length ++
  }
  this.pop = function (){
    if (this.length === 1) {
      let current = this.items.value;
      this.items=null;
      this.length--
      return current;
    } else if (this.items != null) {
      let current = this.items.value
      this.items = this.items.next;
      this.length--
      return current;

        }else {
          return false
        }
  }
  this.size = function (){
    return this.length
  }
  this.isEmpty = function () {
      return this.length!=0 ? false: true
    }
}

var stack = new Stack();
stack.push(3)
stack.push(4)
stack.push(5)
console.log(stack)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack)
stack.size()
console.log(stack)

module.exports = Stack;
