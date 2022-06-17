function SortBy2Criteria(input) {

    let secondary = input.sort((a, b) => a.localeCompare(b));
    let primary = secondary.sort((a, b) => a.length - b.length);
    return secondary.join('\n');
}
console.log(SortBy2Criteria([
    'alpha',
    'beta',
    'gamma']));
console.log(SortBy2Criteria([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']

));
console.log(SortBy2Criteria([
    'test',
    'Deny',
    'omen',
    'Default']
));