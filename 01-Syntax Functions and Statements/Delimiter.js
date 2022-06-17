function Delimiter(array, delimiter) {

return array.join(delimiter);
}
console.log(Delimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'));
console.log(Delimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
));