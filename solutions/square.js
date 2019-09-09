// # Square

// Write a constructor function called `Square` that receives an argument called`side` and initializes an attribute with the same name.

// Add a method`perimeter` that calculates the perimeter of the square.

// Add a method`area` that calculates the area of the square.

function Square(side) {
    this.side = side
    this.perimeter = function () {
        console.log(side * 4)
    }
    this.area = function () {
        console.log(side * side)
    }
}

var s1 = new Square(5);
s1.perimeter(); // 20
s1.area(); // 25

