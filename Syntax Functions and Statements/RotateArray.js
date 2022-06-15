function RotateArray(array, rotations) {
    let count = 0;
    
    while (count != rotations) {
        let last = array.pop();
      array.unshift(last);
        count++;
    }
    return (array.join(' '));
}
console.log(RotateArray([
    '1',
    '2',
    '3',
    '4'],
    2));
console.log(RotateArray([
    'Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15));