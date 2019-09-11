let numTreies = function(n) {
  if (n <= 1) return 1;

  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += numTrees(i-1) * numTrees(n-i);
  }

  return total;
}

let numTrees = function(n) {
  return numTreeCount(n, {});
}

let numTreeCount = function(n, memo) {
  if (n <= 1) return 1;
  if (memo[n]) return memo[n];

  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += numTreeCount(i - 1, memo) * numTreeCount(n - i, memo);
  }

  memo[n] = total;
  return total;
}

console.log(numTrees(100));
