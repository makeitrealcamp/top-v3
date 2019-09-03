/* Robot Return to Origin

There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, 
judge if this robot ends up at (0, 0) after it completes its moves.

The move sequence is represented by a string, and the character moves[i] represents its ith move. 
Valid moves are R (right), L (left), U (up), and D (down). 
If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

Note: The way that the robot is "facing" is irrelevant. 
"R" will always make the robot move to the right once, "L" will always make it move left, etc. 
Also, assume that the magnitude of the robot's movement is the same for each move.


https://leetcode.com/problems/robot-return-to-origin/
*/

var judgeCircle = function(moves) {
    let mov =[0,0]
    moves.split('').forEach ((element)=>{
       if (element ==='U'){
           mov[0]++
       }
       if (element ==='D'){
        mov[0]--
        }
        if (element ==='R'){
            mov[1]++
        }
        if (element ==='L'){
         mov[1]--
         }
    })
    if (mov[0]===0 && mov[1]===0){
        return true
    } else {
        return false
    }

};


// tests
test('Same position', function() {
    expect(judgeCircle("UD")).toBe(true);
    expect(judgeCircle("UUDDRRLL")).toBe(true);
  });
  
  test('Different position', function() {
    expect(judgeCircle("RRDD")).toBe(false);
    expect(judgeCircle("UDDUURLRLLRRUDUDLLRLURLRLRLUUDLULRULRLDDDUDDDDLRRDDRDRLRLURRLLRUDURULULRDRDLURLUDRRLRLDDLUUULUDUUUUL")).toBe(false);
  })
  