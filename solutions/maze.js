function Maze(size) {
    this.size = size;
    this.player = [0, 0];
    this.price = [size - 1, size - 1];
    this.board = [];

    for (var i = 0; i < size; i++) {
        this.board[i] = new Array(size);
    }

    this.drawBoard = function () {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.player[1] === i && this.player[0] === j) {
                    this.board[i][j] = "R";
                } else if (this.price[1] === i && this.price[0] === j) {
                    this.board[i][j] = "P";
                } else {
                    this.board[i][j] = "*";
                }
            }
            console.log(this.board[i]);
        }

    }

    this.getMyPosition = function () {
        return this.player;
    }

    this.won = function () {
        return this.player[0] === this.price[0] && this.player[1] === this.price[1];
    }

    this.moveUp = function (n = 1) {
        if (this.player[1] - n < 0) {
            return false;
        } else {
            this.player[1] -= n;
            console.log("Moved Up " + n + " positions.");
            return true;
        }
    }

    this.moveDown = function (n = 1) {
        if (this.player[1] + n >= this.size) {
            return false;
        } else {
            this.player[1] += n;
            console.log("Moved Down " + n + " positions.");
            return true;
        }
    }

    this.moveLeft = function (n = 1) {
        if (this.player[0] - n < 0) {
            return false;
        } else {
            this.player[0] -= n;
            console.log("Moved Left " + n + " positions.");
            return true;
        }
    }

    this.moveRight = function (n = 1) {
        if (this.player[0] + n >= this.size) {
            return false;
        } else {
            this.player[0] += n;
            console.log("Moved Right " + n + " positions.");
            return true;
        }
    }
}

//Test
var game = new Maze(4);
game.drawBoard();
console.log(game.moveRight()); // true
console.log(game.won()); // false
game.drawBoard();

console.log(game.getMyPosition()); // [0, 1]
console.log(game.moveUp()); // false
game.drawBoard();

console.log(game.moveRight(2)); // true
console.log(game.getMyPosition()); // [0, 3]
console.log(game.won()); // false
game.drawBoard();

console.log(game.moveDown(3)); // true
console.log(game.won()); // true
game.drawBoard();