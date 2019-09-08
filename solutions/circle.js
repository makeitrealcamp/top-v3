// # Circle
//
// Write a constructor function called `Circle` that receives an argument called
// `radius` and initializes an attribute with the same name.
//
// Add a method called `circunference` that returns the circunference of the circle.
//
// Add a method called `area` that returns the area of the circle.

function Circle(radius) {
  this.radius = radius;
  this.circunference = function() {
    console.log(Math.PI * 2 * radius);
  }
  this.area = function() {
    console.log(Math.PI * radius**2);
  }
}

// ```javascript
var circle = new Circle(4);
circle.circunference(); // 2 * r * Pi
circle.area(); // Pi * r^2
