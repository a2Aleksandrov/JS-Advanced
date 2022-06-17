function ProcessOddPositions(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            result.push(input[i] * 2);
        }
    }
    return result.reverse().join(' ');
}
console.log(ProcessOddPositions([10, 15, 20, 25]));
console.log(ProcessOddPositions([3, 0, 10, 4, 7, 3]));