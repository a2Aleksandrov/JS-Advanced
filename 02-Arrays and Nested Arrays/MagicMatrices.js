function MagicMatrices(matrix) {
    let result = [];
    for (let arr of matrix) {
        let rowsSum = 0;
        for (let el of arr) {
            rowsSum += el;
        }
        result.push(rowsSum);
    }
    let count = 0;
    while (count != matrix.length) {
        let columnsSum = 0;

        for (let i = 0; i < matrix.length; i++) {
            columnsSum += matrix[i][count];
        }
        result.push(columnsSum);
        count++;
    }

    let checker = result.shift();
    let isEqual = true;
    for (let num of result) {
        if (checker !== num) {
            isEqual = false;
            break;
        }

    }
    return isEqual;
}
console.log(MagicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(MagicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));
console.log(MagicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));