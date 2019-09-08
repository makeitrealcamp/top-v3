/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  var xBinary = x.toString(2);
  var yBinary = y.toString(2);
  var diference = 0;
  var count = 0;

  // Match the size of strings
  if(xBinary.length > yBinary.length) {
    diference = xBinary.length - yBinary.length;
    yBinary = binary(yBinary, diference);
  } else if(xBinary.length < yBinary.length){
    diference = yBinary.length - xBinary.length;
    xBinary = binary(xBinary, diference);
  }

  // Trivial case
  if(xBinary.length < 1) {
    return count;
  }
  // console.log("xBinary:", xBinary);
  // console.log("yBinary:", yBinary);
  // console.log("x", xBinary.substring(0, 1));
  // console.log("y", yBinary.substring(0, 1));
  // General case
  if(xBinary.substring(0, 1) != yBinary.substring(0, 1)) {
    count++;
    return count + hammingDistance(xBinary.substring(1, xBinary.length), yBinary.substring(1, yBinary.length));
  }
    return hammingDistance(xBinary.substring(1, xBinary.length), yBinary.substring(1, yBinary.length));
}

// Function to match the size of strings
var binary = function(x, n) {
  while(n > 0) {
    x = "0" + x;
    n--;
  }
  return x;
}

// Test
console.log("hammingDistance is:", hammingDistance(1, 8), "\n");
