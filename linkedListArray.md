# Linked List

Write a constructor function called `LinkedList` that doesn't receives any argument but it initializes an attribute `arr` with an empty array.

Add a method `add` that receives an argument (of any type) and adds it to the array `arr`.

Add a method `addAt` that receives two arguments: a position and a value (of any type). It should insert the value in the specified position.

Add a method `valueAt` that receives a position and returns the value at that position of the array `arr`.

Add a method `removeAt` that receives a position and removes the value at the specified position.

```javascript
const list = new LinkedList();
list.add('a');
list.add('b');
list.add('d');
list.addAt(2, 'c');

list.valueAt(0); // 'a'

list.removeAt(0);
```
