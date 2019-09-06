var harmonicSum = function(num) {
  let sum = 0;

  // Caso Trivia
  if (num === 1) {
    return 1;
  }

  // Caso General
  return (1 / num) + harmonicSum(num - 1);
};

console.log(harmonicSum(3))
