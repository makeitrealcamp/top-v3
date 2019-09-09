// # Maze

// Write a constructor function called `Maze` that receives a number as an argument 
// that represents the size of a board.There will be a player that will be located at 
// the top left of the board and a prize that will be located at the bottom right of 
// the board.

// Write methods`moveRight`, `moveLeft`, `moveUp`, and`moveDown` that will allow the 
// player to move through the board to reach the prize.They will return true if it is 
// a valid move, false otherwise.

// Write a method called`getMyPosition` that returns an array with two elements 
// representing the position of the player in the maze using coordinates x and y.

// Write a method called`won` that returns true if the player reached the prize.

function Maze(size) {
    this.size = [size, size]
    this.playerPosition = [0, 0]
    this.prizePosition = [size, size]
    this.moveRight = function (steps) {
        if (steps === undefined) {
            steps = 1
        }
        let change = this.playerPosition[1] + steps // to check if is a valid move
        if (change > this.size[1]) {
            return false
        } else {
            this.playerPosition[1] = this.playerPosition[1] + steps
            return true
        }
    }
    this.moveLeft = function (steps) {
        if (steps === undefined) {
            steps = 1
        }
        let change = this.playerPosition[1] + steps // to check if is a valid move
        if (change < 0) {
            return false
        } else {
            this.playerPosition[1] = this.playerPosition[1] - steps
            return true
        }
    }
    this.moveUp = function (steps) {
        if (steps === undefined) {
            steps = 1
        }
        let change = this.playerPosition[0] - steps // to check if is a valid move
        if (change < 0) {
            return false
        } else {
            this.playerPosition[0] = this.playerPosition[0] - steps
            return true
        }
    }
    this.moveDown = function (steps) {
        if (steps === undefined) {
            steps = 1
        }
        let change = this.playerPosition[0] + steps // to check if is a valid move
        if (change > this.size[0]) {
            return false
        } else {
            this.playerPosition[0] = this.playerPosition[0] + steps
            return true
        }
    }
    this.won = function () {
        if (this.playerPosition[0] === this.prizePosition[0] && this.playerPosition[1] === this.prizePosition) {
            return true
        }
        return false
    }
    this.getMyPosition = function () {
        return this.playerPosition
    }
    this.drawBoard = function () {
        var str = "";
        for (var i = 1; i <= size; i++) {
            for (var j = 1; j <= size; j++) {
                // console.log(this.playerPosition[0]+ " + " + this.playerPosition[1]);
                if (this.playerPosition[0] === i && this.playerPosition[1] === j) {
                    str += " R ";
                } else {
                    str += " * ";
                }
            }
            str += "\n";
        }
        return str.slice(0, str.length - 3) + "P"; // -3 quita \n, " "s y el *
    }
}

// tests

var game = new Maze(4);
console.log(game.drawBoard());

console.log(game.moveRight()) // true
console.log(game.won()) // false
console.log("-----------")
console.log(game.getMyPosition()) // [0, 1]
console.log(game.moveUp()) // false
console.log("-----------")
console.log(game.moveRight(2)) // true
console.log(game.getMyPosition()) // [0, 3]
console.log(game.won()) // false
console.log("-----------")
console.log(game.moveDown(3)) // true
console.log(game.won()) // true
console.log(game.getMyPosition())
console.log(game.drawBoard())


