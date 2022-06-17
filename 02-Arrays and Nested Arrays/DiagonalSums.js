function DiagonalSums(matrix) {
    let mainDiagonal = 0;
    let secDiagonal = 0;
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += matrix[i][i];
        secDiagonal += matrix[i][matrix.length - i - 1];
    }
    result.push(mainDiagonal);
    result.push(secDiagonal);
    return result.join(' ');
}
console.log(DiagonalSums([
    [20, 40],
    [10, 60]
]));
console.log(DiagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]));