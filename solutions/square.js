/*
# Square

Write a constructor function called `Square` that receives an argument called `side` and initializes an attribute with the same name.

Add a method `perimeter` that calculates the perimeter of the square.

Add a method `area` that calculates the area of the square.

```javascript
var s1 = new Square(5);
s1.perimeter(); // 20
s1.area(); // 25
```
*/
function Square(side) {
    this.side=side;
    this.perimeter = function () {
        return this.side*4
    }
    this.area = function() {
        return Math.pow(this.side,2)
    }
}

var s1 = new Square(5);
s1.perimeter(); // 20
s1.area(); // 25
console.log(s1.perimeter());
console.log(s1.area());