function Node (value){
  this.value = value
  this.next = null
}
function Queue () {
  this.head = null
  this.length = 0
  this.tail = null
this.enQueue = function (value){
  const node = new Node (value)
      if (this.head === null){
        this.head = node
        this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
}
}
this.deQueue = function (){
  if (this.head === null){
    return false
  }
   else if (this.length === 1){
    let current = this.head
    this.head = null
    this.tail = null
    this.length --
    return current
  } else {
    let current = this.head
    this.head = current.next
    this.length --
    return current
  }
}

this.size = function (){
  return this.length
  }
this.isEmpty = function () {
       return this.head===null ? true : false;
    }
}


var queue = new Queue ()
queue.enQueue(5)
queue.enQueue(4)
queue.enQueue(3)
queue.enQueue(2)
console.log(queue)
queue.deQueue()
queue.deQueue()
queue.deQueue()
queue.deQueue()
