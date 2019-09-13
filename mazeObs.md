# Maze With Obstacles

Start with the `Maze` you created a few days ago.

Add a method `addBlock` that receives a position and adds a block in that position. Return `true` if the block can be added, `false` otherwise (e.g. the robot or the price is in that position).

```javascript
var game = new Maze(4);
game.addBlock(1, 1); // true
game.addBlock(0, 0); // false - the robot is there
```

Write an algorithm that allows the robot to reach the prize avoiding the blocks.

**Bonus:** locate the prize randomly, not at the bottom right.
