/*# Linked List

**Note:** For this exercise you will need the constructor function `Node`:

```javascript
function Node(val, ref) {
  this.val = val;
  this.ref = ref;
}
```

Write a constructor function `LinkedList` 
that doesn't receives any argument but it initializes 
an attribute `head` with the value `null`.

Add a method `add` that receives a value creates a 
`Node` with the specified value. 
If `head` is `null` assign the new node to `head`. 
Otherwise you have to iterate through all the references 
until you find the last one (the one without reference).
 Assign the new node to the `ref` of that node.

Add a method `addAt` that receives a position and a value. 
It creates a `Node` with the specified value and 
iterates through the nodes until it finds the correct position. 
Set the `ref` of the new node to the `ref` of the current node.
Then update the `ref` of the current node to the new node.

Add a method `valueAt` that receives a position and 
returns the value at the specified position. 
you will have to iterate through the nodes 
until you find the correct position.

Add a method `removeAt` that receives a position and 
removes the node at that position 
(you will have tu update the `ref` of the previous 
node with the `ref` of the node you are removing).

```javascript
const list = new LinkedList();
list.add('a');
list.add('b');
list.add('d');
list.addAt(2, 'c');

list.valueAt(0); // 'a'

list.removeAt(0);
```
*/

function Node (data) {
    this.value=data;
    this.next=null;
}

function LinkedList () {
    this.head=null;
    this.size=0;

    this.add = function(value) {
        const node = new Node(value);
        let current=null;
        if (this.head==null) {
            this.head = node
        } else {
        current = this.head;
            while (current.next != null) {
                current=current.next
            } 
            current.next=node;
        }
        this.size++
    }
    this.valueAt= function(index) {
        if (index >=0 && index <= this.size) {
            let node = this.head;
            for (let i = 0; i<index; i++ ) {
               node = node.next;
            }
            return node;
        }
        return undefined;
    }

    this.addAt = function (index,value) {       
        if ( index >= 0 && index <= this.size) {
            const node = new Node(value);       
        if (index===0) {
            const current= this.head;
            node.next= current;
            this.head=node;
        } else {
            const previous = this.valueAt(index-1);
            const current = previous.next;
            node.next= current;
            previous.next = node;
        }
        this.size++
        return true;
    }
    false;
    }

    this.removeAt = function(index) {
        if (index>=0 && index< this.size){
            let current = this.head;
            if (index===0){
                this.head = current.next;
            } else {
              const previous = this.valueAt(index-1);
              current = previous.next;
              previous.next = current;  
            }
            this.size--;
            return true;
        }
        return false;        
    }

    this.indexOf = function (element) {
        let current = this.head;
        for (let i=0; i<this.size && current != null; i++) {
            if (element===current.value) {
                return i;
            }
            current = current.next;
        }
        return false;
    } 

    this.remove = function (element) {
        const index = this.indexOf (element);
        return this.removeAt(index);
    }

    this.printElements = function () {
        if (this.head === null) {
            return 'Empty';
        }
        let listValues= `${this.head.value}`;
        let current = this.head.next;
        for(let i=0; i<this.size && current!=null;i++) {
            listValues = `${listValues}, ${current.value}`
            current = current.next;
        }
        return listValues;
    }
    this.sizeOf = function () {
        return this.size;
    }
    this.isEmpty = function () {
        if (this.head===null) {
            return true;
        } else {
            return false;
        }

    }
}


const list = new LinkedList();
console.log(list.isEmpty());
/*
list.add('a')
list.add('b')
list.add('c')
console.log(list);
console.log(list.indexOf('c'));
list.addAt(1,'New value')
list.addAt(0,'New head')
console.log(list.printElements());
//console.log(list);
//list.removeAt(1)
//console.log(list);
//list.removeAt(0)
//console.log(list);
console.log(list.isEmpty());
console.log(list.sizeOf());*/