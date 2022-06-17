function SmallestTwoNumbers(input) {

    input = input.sort((a, b) => a - b);
    let result = [];
    let firstSmallest = input.shift();
    result.push(firstSmallest);
    let secSmallest = input.shift();
    result.push(secSmallest);

    return result.join(' ');
}
console.log(SmallestTwoNumbers([30, 15, 50, 5]));
console.log(SmallestTwoNumbers([3, 0, 10, 4, 7, 3]));