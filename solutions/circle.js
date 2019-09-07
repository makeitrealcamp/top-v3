/*
# Circle
Write a constructor function called `Circle` that receives an argument called `radius` 
and initializes an attribute with the same name.

Add a method called `circunference` that returns the circunference of the circle.

Add a method called `area` that returns the area of the circle.

```javascript
var circle = new Circle(2);
circle.circunference(); // 2 * r * Pi
circle.area(); // Pi * r^2
```
*/
function Circle (radius) {
    this.radius=radius
    this.circunference=function() {
        return this.radius*2*Math.PI
    }
    this.area= function() {
        return Math.PI*(Math.pow(this.radius,2))
    }
}

module.exports= Circle

var circle = new Circle(3);
console.log(circle.circunference()); // 2 * r * Pi
console.log(circle.area()); // Pi * r^2)