let hammingDistance = function(x, y) {
  let val = x ^ y;

  let distance;
  for (distance = 0; val > 0; distance++) {
    val &= val - 1;
  }

  return distance;
}

console.log(hammingDistance(4, 1))
