function ArgumentInfo(...dataTypes) {

    let types = {};
    for (let el of dataTypes) {
        types[typeof el] != undefined ? types[typeof el]++ : types[typeof el] = 1;

        console.log(`${typeof el}: ${el}`);
    }

    let result = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (let [type, count] of result) {
        console.log(`${type} = ${count}`);
    }
}
ArgumentInfo(function () { console.log('Hello world!'); }, 'dog', 21, 'str', 22);
