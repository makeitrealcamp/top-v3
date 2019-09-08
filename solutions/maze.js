// # Maze
//
// Write a constructor function called `Maze` that receives a number as an argument
// that represents the size of a board. There will be a player that will be located
// at the top left of the board and a prize that will be located at the bottom right
// of the board.
//
// Write methods `moveRight`, `moveLeft`, `moveUp`, and `moveDown` that will allow
// the player to move through the board to reach the prize. They will return true if
// it is a valid move, false otherwise.
//
// Write a method called `getMyPosition` that returns an array with two elements
// representing the position of the player in the maze using coordinates x and y.
//
// Write a method called `won` that returns true if the player reached the prize.

function Maze(n) {
  this.CountX = 0;
  this.CountY = 0;

  this.moveRight = function(m) {
    if(m) {
      this.CountX += m;
      return true;
    } else if(this.CountX < n) {
      this.CountX++;
      return true;
    }
    return false;
  }
  this.moveLeft = function(m) {
    if(m) {
      this.CountX += m;
      return true;
    } else if(this.CountX > 0) {
      this.CountX--;
      return true;
    }
    return false;
  }
  this.moveUp = function(m) {
    if(m) {
      this.CountY += m;
      return true;
    } else if(this.CountY > 0) {
      this.CountY--;
      return true;
    }
    return false;
  }
  this.moveDown = function(m) {
    if(m) {
      this.CountY += m;
      return true;
    } else if(this.CountY < n) {
      this.CountY++;
      return true;
    }
    return false;
  }
  this.getMyPosition = function() {
    return "[" + this.CountX + ", " + this.CountY + "]"
  }
  this.won = function() {
    if(this.CountX === (n) && this.CountY === (n)) {
      return true;
    }
    return false;
  }
  this.drawBoard = function() {
    var str = "";
    for(var i = 1; i <= n; i++) {
      for(var j = 1; j <= n; j++) {
        if(this.CountX === i && this.CountY === j) {
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

// Test
var game = new Maze(6);
console.log("[>]:", game.moveRight()); // true
console.log("Won:", game.won()); // false
//
console.log("My position:", game.getMyPosition()); // [0, 1] // [1, 0]
console.log("[^]:", game.moveUp()); // false
//
console.log("[>][>]:", game.moveRight(2)); // true
console.log("My position:", game.getMyPosition()); // [0, 3] // [3, 0]
console.log("Won:", game.won()); // false
//
console.log("[v][v][v]:", game.moveDown(3)); // true
console.log("My position:", game.getMyPosition());
console.log("Won:", game.won()); // true

// Board
console.log(game.drawBoard());

// * * * *
// * R * *
// * * * *
// * * * P
