function ListOfNames(names) {
    let result = [];
    let sorted = names.sort((a, b) => a.localeCompare(b))
    let count = 1;
    for (let name of sorted) {
        result.push(`${count}.${name}`);
        count++;
    }
    return result.join('\n');
}
console.log(ListOfNames(["John", "Bob", "Christina", "Ema"]));
