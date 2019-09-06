/* Write a constructor function called Square that receives an argument called
side and initializes an attribute with the same name.
Add a method perimeter that calculates the perimeter of the square.
Add a method area that calculates the area of the square. */

function Square (size){
  this.size = size;
  this.perimeter = function () {
    return this.size * 4
  }
  this.area = function () {
    return this.size * this.size
  }
}
var s1 = new Square(5);
console.log(s1.perimeter()); // 20
console.log(s1.area()); // 25
