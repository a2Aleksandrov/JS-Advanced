function EqualNeighbors(matrix) {
    let count = 0;
    let j = 0;
    let a = 1;
    while (j != matrix.length -1 ) {
        for (let i = 0; i < (matrix[j]).length; i++) {

            if (matrix[j][i] == matrix[j + a][i]) {
                count++;
            }

        }
        a++;
    }
    return count;

}
console.log(EqualNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));
console.log(EqualNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));