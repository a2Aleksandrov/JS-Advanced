function LastKNumbersSequence(n, k) {

    let result = [1];
    while (result.length < n) {
        let count = 0;
        let num = 0;
        for (let i = result.length - 1; i >= 0; i--) {
            num += result[i];
            count++
            if (count == k) {
                break;
            }
        }
        result.push(num);
    }
    return result;
}
console.log(LastKNumbersSequence(6, 3));
console.log(LastKNumbersSequence(8, 2));