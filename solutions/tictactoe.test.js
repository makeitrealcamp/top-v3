// write your solution here

function tictactoe(tablero) {
 var hayGanador = false;

 for (var i = 0; i < 3 ; i++) {
//Si son las filas iguales
  if(tablero[i][0] === tablero[i][1] && tablero[i][0]===tablero[i][2]) {
   hayGanador = true;
  }
//Si son las columnas iguales
  if(tablero[0][i] === tablero[1][i] && tablero[0][i]===tablero[2][i]){
   hayGanador = true;
  }
}
//Si son las diagonales iguales
//diagonal principal
  if(tablero[0][0] === tablero[1][1] && tablero[0][0]===tablero[2][2]){
   hayGanador = true;
  }
//diagonal secundaria
  if(tablero[2][0] === tablero[1][1] && tablero[2][0]===tablero[0][2]){
   hayGanador = true;
   }
 return hayGanador; 
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
