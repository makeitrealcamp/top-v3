/* 1. Create an array to represents the robot’s position. The array contains
two values x & y 
2. The robot is able to move in 4 directions, up, down ,
left and right.
3. Each possible movement (U, D, L, R)  is represented for the chart value, also
every moment represents a movement in one of the two axes (Height or Length)
 3. For each movement you need to increase or
decrease the corresponding value in the corresponding axe.
4. Is neccesary to create a variable to containt the result for all the movements.
4. At the end, if the variable result is in 0 for at least one of the axes,
the robot is at the starting position and the function returns true,
else returns false */

/*
 * @param {string} moves
 * @return {boolean}*/

function robot (moves) {
let x = 0;
let y = 0;
for (let i=0; i<moves.length; i++){
  if (moves[i] === "U"){
    x = (x + 1)
  } else if (moves[i] === "D"){
    x = (x - 1)
  }  else if (moves[i] === "L"){
    y = (y + 1)
  } else if (moves[i] === "R"){
    y = (y - 1)
  }
}  if (x + y === 0){
  return true
} else {
  return false
}
}


test('The robot returns to the origin', function() {
  expect(robot("UD")).toBe(true);
  expect(robot("LR")).toBe(true);
  expect(robot("LL")).toBe(false);
  expect(robot("DD")).toBe(false);
});
