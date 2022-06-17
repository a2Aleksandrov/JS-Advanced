function ExtractIncreasingSubsequence(input) {
    let result = [];
    let curr = input.shift();
    result.push(curr);
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= curr) {
            result.push(input[i]);
        }
        curr = input[i];
    }
    return (result);
}
console.log(ExtractIncreasingSubsequence([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));
console.log(ExtractIncreasingSubsequence([
    1,
    2,
    3,
    4]));
console.log(ExtractIncreasingSubsequence([
    20,
    3,
    2,
    15,
    6,
    1]));