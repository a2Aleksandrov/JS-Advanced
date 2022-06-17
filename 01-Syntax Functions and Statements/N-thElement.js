function NthElement(array, step) {
    let result = [];
    for (let i = 0; i < array.length; i+= step) {
        result.push(array[i])  
    }
    return result;
}
console.log(NthElement([
    '5',
    '20',
    '31',
    '4',
    '20'],
    2));
NthElement([
    'dsa',
    'asd',
    'test',
    'tset'],
    2);
NthElement([
    '1',
    '2',
    '3',
    '4',
    '5'],
    6
);
