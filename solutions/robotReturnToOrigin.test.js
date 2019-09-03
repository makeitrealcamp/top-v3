// https://leetcode.com/problems/robot-return-to-origin/

//Pseudocode
//There is a robot starting at position (0, 0), the origin, on a 2D plane.
//Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
//
//The move sequence is represented by a string, and the character moves[i] represents its ith move.
//Valid moves are R (right), L (left), U (up), and D (down).
//If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.
//
//Input: a string where each character is a command.
//Output: returns true if the final position is 0.0, returns false otherwise.
//Instructions:
//1. Initialize the variables of position x, y = 0
//2. run the string, adding or dedycting the position depending on the string
//3. Return true if both x and y = o, false otherwise;

// Complexity: O(n)

function judgeCircle(moves) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      case "R":
        x++;
        break;
      case "L":
        x--;
        break;
    }
  }
  return ((x === 0) && (y === 0));
}

//Tests
test('Robot returns to origin', function() {
    expect(judgeCircle("UDUDLRLR")).toBe(true);
    expect(judgeCircle("UDUDLRL")).toBe(false);
    expect(judgeCircle("UUDLRLR")).toBe(false);
})
