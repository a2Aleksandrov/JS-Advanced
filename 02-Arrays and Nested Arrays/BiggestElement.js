function BiggestElement(matrix) {

    let result = [];

    for (let arr of matrix) {
        arr = arr.sort((a, b) => a - b);
        result.push(arr.pop());

    }
    result = result.sort((a, b) => a - b);
    return result.pop();

}
console.log(BiggestElement([
    [20, 50, 10],
    [8, 33, 145]
]
));
console.log(BiggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]));