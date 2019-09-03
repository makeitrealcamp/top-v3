// Pseudocode
//
// Input: String with 
// Output: Boolean ( true if is in the middle, false does not in the origin
//
// Instrucitions:
//    + Create an array that represents the position of the robot axis x and y, [0, 0] that is the
//    origin
//    + Iterate over the string
//    + Increase by 1 the first position of the array if is R
//    + Deacrese by 1 the first position of the array if is L
//    + Increase by 1 the second position of the array if is U
//    + Deacrese by 1 the second position of the array if is D
//
//    + Check if the sum of the array is equal to 0, if its 0 return true else return false

// write your solution here

var moveRobot = function(str) {
  var array = [0, 0]; // x, y
  
  for (i = 0; i < str.length; i++) {
    var char = str.charAt(i)
    array = make_movement(array, char)
  }
  return array[0] === 0 && array [1] === 0
}

var make_movement = function(array, char) {
   if (char === "R") {
     return [array[0] + 1, array[1]]
   } else if (char === "L"){
     return [array[0] - 1, array[1]]
   } else if (char === "U") {
     return [array[0], array[1] + 1]
   } else if (char === "D") {
     return [array[0], array[1] - 1]
   } else {
     return array
   }
}
  


// tests
test('the robot return to the origin', function() {
  expect(moveRobot("LLLLUUUURRRRDDDD")).toBe(true);
  expect(moveRobot("UD")).toBe(true);
});

test('the robot is not at the origin', function() {
  expect(moveRobot("LL")).toBe(false);
  expect(moveRobot("DD")).toBe(false);
})
