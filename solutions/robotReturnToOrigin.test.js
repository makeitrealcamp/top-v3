// Pseudocode
// Input: String with characters representing moves (R = moves rigth, L = moves
// left, U = moves Up, D = move Down)
// Output: boolean (true if position is 0 at X axis and 0 at Y axis, false otherwise)
// Instructions:
//   Set a variable for the initial position
//   Check the string characters one by one
//   If character is U add one to the position in Y axis
//   If character is D subtract one to the position in Y axis
//   If character is R add one to the position in X axis.
//   If character is L subtract one to the position in X axis
//   Compare if the result is equal to 0 in X and 0 in Y
//   Return true if is equal false if not

// code
var judgeCircle = function(moves) {
    let position = [0,0]
    for (let i = 0; i < moves.length; i++){
        if (moves[i] === "U"){
            position[1]++
        } else if (moves[i] === "D"){
            position[1]--
        } else if (moves[i] === "R"){
            position[0]++
        } else if (moves[i] === "L"){
            position[0]--
        }
    }
    return (position[0] === 0 && position[1] === 0 )
}


// tests
test('Robot', function() {
  expect(judgeCircle("UD")).toBe(true);
  expect(judgeCircle("LL")).toBe(false);
  expect(judgeCircle("URDL")).toBe(true);
  expect(judgeCircle("UUDRRL")).toBe(false);
})
