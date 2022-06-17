function NegativePositiveNumbers(input) {


    let result = [];
    for (let num of input) {
        if (num >= 0) {
            result.push(num);
        } else {
            result.unshift(num)
        }

    }
    return result.join('\n');
}
console.log(NegativePositiveNumbers([7, -2, 8, 9]));
console.log(NegativePositiveNumbers([3, -2, 0, -1]));