/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    var newMatrix = []
    for (let i = 0; i < A[0].length; i++) {
        newMatrix[i] = new Array(A.length)
    }
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            newMatrix[j][i] = A[i][j]
        }
    }
    return newMatrix
}