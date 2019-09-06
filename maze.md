# Maze

Write a constructor function called `Maze` that receives a number as an argument that represents the size of a board. There will be a player that will be located at the top left of the board and a prize that will be located at the bottom right of the board.

Write methods `moveRight`, `moveLeft`, `moveUp`, and `moveDown` that will allow the player to move through the board to reach the prize. They will return true if it is a valid move, false otherwise.

Write a method called `getMyPosition` that returns an array with two elements representing the position of the player in the maze using coordinates x and y.

Write a method called `won` that returns true if the player reached the prize.

```javascript
var game = new Maze(4);
game.moveRight(); // true
game.won(); // false

game.getMyPosition(); // [0, 1]
game.moveUp(); // false

game.moveRight(2); // true
game.getMyPosition(); // [0, 3]
game.won(); // false

game.moveDown(3); // true
game.won(); // true
```

Add a method called `drawBoard` that draws the maze using `*` as an empty space, `R` to denote my position and `P` to the note the prize.

```javascript
game.drawBoard();
// * * * *
// * R * *
// * * * *
// * * * P
```
