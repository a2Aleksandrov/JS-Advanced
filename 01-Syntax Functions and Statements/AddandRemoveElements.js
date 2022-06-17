function AddandRemoveElements(input) {
    let result = [];
    let count = 0;
    for (let el of input) {
        count++;
        if (el == 'add') {
            result.push(count);
        } else if (el == 'remove') {
            result.pop();
        }
    }
    
    return (result.length > 0) ? result.join('\n') : 'Empty';
}
console.log(AddandRemoveElements([
    'add',
    'add',
    'add',
    'add']));
console.log(AddandRemoveElements([
    'add',
    'add',
    'remove',
    'add',
    'add']));
console.log(AddandRemoveElements([
    'remove',
    'remove',
    'remove']));