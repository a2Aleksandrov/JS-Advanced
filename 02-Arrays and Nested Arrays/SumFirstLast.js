function SumFirstLast(input) {
    let first = Number(input.shift());
    let last = Number(input.pop());

    return first + last;

}
console.log(SumFirstLast(['20', '30', '40']));
console.log(SumFirstLast(['5', '10']));