function BiggerHalf(input) {

    let sorted = input.sort((a, b) => a - b);
    let result = sorted.slice(sorted.length / 2);
    return result;
}
console.log(BiggerHalf([4, 7, 2, 5]));
console.log(BiggerHalf([3, 19, 14, 7, 2, 19, 6]));