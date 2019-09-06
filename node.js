/* Write a constructor function called Node that receives a value and another node, and
initializes the attributes value and ref respectively. */

function Node (value, ref){
  this.value = value
  this.ref = ref
  var node = n1;
  while (node.value) {
      console.log(node.ref);
      if (node.ref) {
          node = node.ref;
      } else {
          break;
      }
  }
var n4 = new Node(4);
var n3 = new Node(3, n4);
var n2 = new Node(2, n3);
var n1 = new Node(1, n2);
// should print:
// 1
// 2
// 3
// 4
