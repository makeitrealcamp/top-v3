function solveSudoku(str) {
    // convertir la cadena a un arreglo de arreglos (matriz)
    var board = strToMatrix(str);
    var result = solve(board);
    if (result) {
        return result;
    } else {
        return "No se pudo solucionar!";
    }
}

function solve(board) {
    // buscar el siguiente espacio en blanco: [fila, columnna]
    var pos = findNextSpace(board);

    // si no encuentra un posición ya está solucionado
    if (pos === -1) {
        return board;
    }

    // encontrar los posibles números que pueden ir en ese espacio
    var options = findOptions(board, pos);

    if (options.length === 0) {
        return null;
    }

    for (var i = 0; i < options.length; i++) {
        var row = pos[0];
        var col = pos[1];
        board[row][col] = options[i];
        var result = solve(board);
        if (result) {
            return board;
        }

        board[row][col] = ".";
    }
}

//lijto
function strToMatrix(str) {
    // convertir el string a un arreglo de arreglos (matriz)
    // deben quedar 9 subarreglos, cada uno con 9 elementos
    var matrix = []
    for (let i = 0; i < 9; i++) {
        matrix.push([])
        for (let j = 0; j < 9; j++) {
            matrix[i][j] = str[(i * 9) + j]
        }
    }
    return matrix
}

//lijto
function findNextSpace(board) {
    // encontrar el siguiente "." o devolver -1 si no hay. Deben retornar [row, col]
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === ".") {
                return [i, j]
            }
        }
    }
    return -1
}


function findOptions(board, pos) {
    // empezar con un arreglo [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // validar cada número:
    //   mirar que no exista en la fila
    //   mirar que no exista en la columna
    //   mirar que no exista en el cuadrante
    //   si no cumple todas las anteriores
    //      eliminar el número del arreglo
    // retornar los que queden
    let options = []
    let col = []
    let square = []

    let x1 = Math.floor(pos[0] / 3) * 3 // square rows
    let y1 = Math.floor(pos[1] / 3) * 3 // square cols
    let x2 = x1 + 3 // length to the rows
    let y2 = y1 + 3 // length to the cols

    // fill the square
    for (let n = x1; n < x2; n++) {
        for (let m = y1; m < y2; m++) {
            square.push(board[n][m])
        }
    }
    // fill the col
    for (let i = 0; i < 9; i++) {
        col.push(board[i][pos[1]])
    }
    // check if the function can add the number
    for (let r = 1; r < 10; r++) {
        let number = r.toString(10)
        if (board[pos[0]].indexOf(number) === -1) {
            if (col.indexOf(number) === -1) {
                if (square.indexOf(number) === -1) {
                    options.push(number)
                }
            }
        }
    }
    return options
}


function matrixToStr(board) {
    // recibe la matriz y la convierte en una cadena
    let str = []
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            str.push(board[i][j])
        }
    }
    return str.join("")
}


var str = "..952.18.7....3...5...8...7.7.1.5..83.6...4.18..3.4.2.4...5...6...7....2.27.485..";
console.log(solveSudoku(str));   