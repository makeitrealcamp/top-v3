/*
# Linked List

Write a constructor function called `LinkedList` 
that doesn't receives any argument 
but it initializes an attribute `arr` with an empty array.

Add a method `add` that receives an argument (of any type) 
and adds it to the array `arr`.

Add a method `addAt` that receives two arguments: a position and a value (of any type). 
It should insert the value in the specified position.

Add a method `valueAt` that receives a position and returns 
the value at that position of the array `arr`.

Add a method `removeAt` that receives a position 
and removes the value at the specified position.

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

function LinkedList() {
    this.arr=[];

    this.add = function(value) {
        this.arr.push(value);
    }

    this.addAt = function(position,value) {
        if (position>= 0 && position < this.arr.length){
            if (position===0) {
                this.arr.unshift(value)
            } else {
                this.arr.splice(position,0,value);
            }
            return true;
        }
        return false        
    }
    this.valueAt = function (position) {
        return this.arr[position]
    }
    this.removeAt = function (position) {
        this.arr.splice(position,1);
    }
    this.indexOfElement = function (value) {
        return this.arr.indexOf(value);
    }
    this.remove = function(value) {
        const index = this.indexOfElement(value);
        return this.removeAt(index);
    }
    this.printElements = function () {
        let listValues=''
        for (let element of this.arr){
        listValues += `${element} `;
        }
        return listValues;
    }
    this.size = function () {
        return this.arr.length;
    }
    this.isEmpty = function () {
        if (this.arr.length<=0) {
            return true;
        } else {
            return false;
        }
    }
}

const list = new LinkedList();
console.log(list.isEmpty());

list.add('a')
list.add('b')
list.add('c')
//console.log(list);
//console.log(list.indexOf('c'));
list.addAt(1,'New value')
list.addAt(0,'New head')
//console.log(list.printElements());
//console.log(list);
//console.log(list.indexOfElement('c'));
//console.log(list.printElements());
console.log(list.isEmpty());
console.log(list.size());