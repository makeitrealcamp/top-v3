// Complejidad O(n)
//
//
// write your solution here
//

var tictactoe = function(game) {
  for ( i = 0; i < 3; i++ ) {
    if (game[i][0] === game[i][1] && game[i][0] === game[i][2]) {
      return true
    }
    
    if (game[0][i] === game[1][i] && game[0][i] === game[2][i]) {
      return true
    }
  }

  
  if (game[0][0] === game[1][1] && game[0][0] === game[2][2]) {
    return true
  }

  if (game[2][0] === game[1][1] && game[2][0] === game[0][2]) {
    return true
  }

  return false
}


// tests
test('winning positions for X', function() {
  expect(tictactoe([
      ['X', '', 'O'],
      ['', 'X', 'O'],
      ['O', '', 'X']
    ])).toBe(true);

  expect(tictactoe([
      ['X', '', 'O'],
      ['X', 'O', 'O'],
      ['X', '', 'X']
    ])).toBe(true);

  expect(tictactoe([
      ['X', '', 'O'],
      ['', 'O', 'O'],
      ['X', 'X', 'X']
    ])).toBe(true);
});

test('winning positions for O', function() {
  expect(tictactoe([
      ['O', '', 'X'],
      ['', 'O', 'X'],
      ['X', '', 'O']
    ])).toBe(true);

  expect(tictactoe([
      ['O', '', 'X'],
      ['O', 'X', 'X'],
      ['O', '', 'O']
    ])).toBe(true);

  expect(tictactoe([
      ['O', '', 'X'],
      ['', 'X', 'X'],
      ['O', 'O', 'O']
    ])).toBe(true);
});

test('not winning positions', function() {
  expect(tictactoe([
      ['O', 'X', 'O'],
      ['', 'X', 'O'],
      ['O', '', 'X']
    ])).toBe(false);
});
