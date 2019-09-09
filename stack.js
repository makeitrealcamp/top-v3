function Stack (){
  this.items = {}
  this.index = 0
  this.push = function (value){
    this.index ++
    this.items[this.index] = value
  }
  this.pop = function (){
    delete this.items[this.index-1]
    this.index --
    return true
  }
  this.size = function (){
    return this.index
  }
}

var stack = new Stack();
stack.push(3)
stack.push(4)
stack.push(5)
console.log(stack)
stack.pop()
console.log(stack)
stack.size()
console.log(stack)
