
/* Write a constructor function called Circle that receives an argument called
radius and initializes an attribute with the same name.
Add a method called circunference that returns the circunference of the circle.
Add a method called area that returns the area of the circle. */

function Circle (radius){
  this.radius = radius;
  this.circunference = function (){
    return 2 * this.radius * 3.1416;
  }
  this.area = function (){
    return 3.1416 * (this.radius ** 2)
  }
}
var circle = new Circle(2); // Area & circunference is the same result using "2" as parameter.
console.log(circle.circunference()); // 2 * r * Pi
console.log(circle.area()); // Pi * r^2
var circle = new Circle(3);
console.log(circle.circunference()); // 18.8496
console.log(circle.area()); // 28.2744
