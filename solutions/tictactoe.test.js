////////// Pseudocodigo //////////
//
// Entrada: matriz de tamaño 3
// Salida: True si hay ganador y false en caso contrario
//
// si los elementos de la diagonal secundaria son iguales entre si:
//   retorne true
// si los elementos de la diagonal principal son iguales entre si:
//   retorne true
//
// para las filas y las columnas:
//   si los elementos de cada una de las filas son iguales entres si:
//    retorne true
//   si los elementos de cada una de las columnas son iguales entre si:
//     retorne true
//
// retorne false

// Complejidad: O(n)

// write your solution here

function tictactoe(m) {
  //Check top-left/bottom-right diagonal
  if(m[0][0]==m[1][1]&&m[0][0]==m[2][2]&&m[0][0]!=''){
    return true;
  }
  //Check top-rigth/bottom-left diagonal
  if(m[0][2]==m[1][1]&&m[0][2]==m[2][0]&&m[0][2]!=''){
    return true;
  }
  //Check Rows and Columns
  for (let i = 0; i < 3; i++) {
    //Check Rows
    if(m[i][0]==m[i][1]&&m[i][0]==m[i][2]&&m[i][0]!=''){
      return true;
    }
    //Check Columns
    if((m[0][i]==m[1][i]&&m[0][i]==m[2][i]&&m[0][i]!='')){
      return true;
    }
  }
  return false;
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
