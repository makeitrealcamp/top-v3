function solveSudoku(str) {
	// convertir la cadena a un arreglo de arreglos (matriz)
	var board = strToMatrix(str)
	var result = solve(board)
	if (result) {
		return matrixToStr(result)
	} else {
		return 'No se pudo solucionar!'
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

		board[row][col] = '.';
	}
}

function strToMatrix(str) {
	var arr = str.split('');
	var res = [];
	for (let i = 0; i < 9; i++) {
		res.push(arr.splice(0, 9));
	}
	return res;
}

function findNextSpace(board) {
	// encontrar el siguiente "." o devolver -1 si no hay. Deben retornar [row, col]
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] == '.') {
				return [ i, j ]
			}
		}
	}
	return -1
}

function findOptions(board, pos) {
	let result = [];

	for (let i = 1; i < 10; i++) {
		let flag = true;

		// Filas
		for (let j = 0; j < 9; j++) {
			if (board[pos[0]][j] == i) {
				flag = false;
			}
		}

		// Columnas
		for (let j = 0; j < 9; j++) {
			if (board[j][pos[1]] == i) {
				flag = false;
			}
		}

		// Cuadrante
		flag = findQuadrant(i, board, pos, flag);

		if (flag) {
			result.push(i)
		}
	}
	return result
}

function findQuadrant(num, board, pos, flag) {
	let rowQuadrant = Math.floor(pos[0] / 3) * 3
	let colQuadrant = Math.floor(pos[1] / 3) * 3

	for (let j = 0; j < 3; j++) {
		for (let z = 0; z < 3; z++) {
			if (board[rowQuadrant + j][colQuadrant + z] == num) {
				flag = false;
			}
		}
	}

	return flag;
}

function matrixToStr(board) {
	let result = "";

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			result += board[i][j];
		}
	}
	return result;
}


var str = '5..6.....8275.....6..831..5..24...87......4.2..4..8..6.9.1.7...21...67...53.....9'
console.log(solveSudoku(str))
