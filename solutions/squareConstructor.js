function Square(side) {
    this.side = side;
    this.perimeter = function () {
        return this.side * 4;
    }
    this.area = function () {
        return this.side * this.side;
    }
}
var s1 = new Square(4);
console.log(s1.perimeter()); // 20
console.log(s1.area()); // 25
