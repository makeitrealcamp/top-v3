function Circle(radius) {
  this.radius = radius;
  this.circunference = function() {
    return Math.PI * this.radius * 2;
  }
  this.area = function() {
    return Math.PI * this.radius * this.radius;
  }
}

var circle = new Circle(100);
console.log(circle.circunference()); // 2 * r * Pi
console.log(circle.area()); // Pi * r^2
