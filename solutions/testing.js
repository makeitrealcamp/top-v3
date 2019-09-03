/*
function tictactoe(matrix) {
    let X=[];
    let O=[];
  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[i].length; j++){
        if (matrix[i][j]==='X' ){
            X.push(i);
            X.push(j);
        } else if (matrix[i][j]==='O'){
            O.push(i);
            O.push(j);
        }
    }
  }
  console.log('Valor de O'+ O)
  if (X.length > 6 ) {
      
      for (let i=0; i<2;i +=2) {
        let x=X.slice(i,6+i).join('').toString()           
        if( winner(x,O.join('').toString())){
            return true
        }
        }
    } 
    else if (O.length > 6 ) {      
        for (let i=0; i<3;i +=2) {            
            let o=O.slice(i,6+i).join('').toString()           
            if( winner(X.join('').toString(),o)){
                return true
            }
            
      }
    }
    else {
        if( winner(X.join('').toString(),O.join('').toString())){
            return true
        }
        }
  return false 
 
  }

  function winner(x,o){
    //let winners ="000102 101112 202122 001020 011121 021222 001122 021120"
    let winners={
        '000102':'',
        '101112':'',
        '202122':'',
      //verticales
        '001020':'',
        '011121':'',
        '021222':'',
      //diagonal
        '001122':'',
        '021120':''
      }
    if (winners.hasOwnProperty(x)  || winners.hasOwnProperty(o)  ) {
        return true
      } else {
          return false
        }
  } */
/* ganadoras Horizontales
0,0 0,1 0,2
1,0 1,1 1,2
2,0 2,1 2,2
verticales
0,0 1,0 2,0
0,1 1,1 2,1
0,2 1,2 2,2
diagonal
0,0 1,1 2,2
0,2 1,1 2,0
 
function tictactoe(matrix) {
    let X=[];
    let O=[];
let winners = ['000102', '101112', '202122', '001020', '011121', '021222', '001122', '021120']
  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[i].length; j++){
        if (matrix[i][j]==='X'){
            X.push(i,j);
            //X.push(j);
        } else if (matrix[i][j]==='O'){
            O.push(i,j);
            //O.push(j);
        }
    }
  }
X = X.join('').toString()
O = O.join('').toString()
console.log(X)
console.log(O)
for (let i = 0; i < winners.length; i++){
  if (X.includes(winners[i]) || O.includes(winners[i])){
    i = winners.length
    return true
  }
  else if (i == winners.length - 1){
    return false
  }
}
}

 console.log(tictactoe([
    ['X', '', 'O'],
    ['', 'X', 'O'],
    ['O', '', 'X']
  ]))



console.log(tictactoe([
    ['O', 'X', 'O'],
    ['', 'X', 'O'],
    ['O', '', 'X']
  ]))
  console.log(tictactoe([
    ['O', '', 'X'],
    ['', 'X', 'X'],
    ['O', 'O', 'O']
  ]))


  console.log(tictactoe([
    ['O', '', 'X'],
    ['O', 'X', 'X'],
    ['O', '', 'O']
  ]));


  test('robot', function() {
  expect(judgeCircle("DU")).toBe(true)); */
  var judgeCircle = function(moves) {
    let mov =[0,0]
    moves.split('').forEach ((element)=>{
       if (element ==='U'){
           mov[0]++
       }
       if (element ==='D'){
            mov[0]--
        }
        if (element ==='R'){
            mov[1]++
        }
        if (element ==='L'){
            mov[1]--
         }
    })
    if (mov[0]===0 && mov[1]===0){
        return true
    } else {
        return false
    }

};

console.log(judgeCircle('UD'))
