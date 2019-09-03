  /*Pseudocode 
  Input: Matrix
  Output: boolean true/false
  Create an array with the winner coordinates
  create two empty vectors
  for each element in the matrix
    save the index position when the value be X or O
  convert the values into strings
  for each element in winners values
    if winners values contain the X or O value 
      return true
      else if the cicle === length of winners vector
      return false

*/


// write your solution here

function tictactoe(matrix) {
  let winners = ['000102', '101112', '202122', '001020', '011121', '021222', '001122', '021120'];
  let X=[];
  let O=[];
for (let i=0; i<matrix.length; i++) {
  for (let j=0; j<matrix[i].length; j++){
      if (matrix[i][j]==='X'){
          X.push(i,j);          
      } else if (matrix[i][j]==='O'){
          O.push(i,j);          
      }
  }
}
  X = X.join('').toString()
  O = O.join('').toString()
  for (let i = 0; i < winners.length; i++){
    if (X.includes(winners[i]) || O.includes(winners[i])){      
    return true
    }
    else if (i === winners.length - 1){
      return false
    }
  }
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
