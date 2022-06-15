function AggregateElements(input) {
    let sum = 0;
    let sumReversed = 0;
    let concatenation = '';
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
        sumReversed += 1 / input[i];
        concatenation += String(input[i]);
    }
    console.log(sum);
    console.log(sumReversed);
    console.log(concatenation);

}
AggregateElements([1, 2, 3]);
AggregateElements([2, 4, 8, 16]);