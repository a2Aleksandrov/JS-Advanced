function WordsUppercase(input) {

    let pattern = /\w+/g;
    let match = pattern.exec(input);

    let result = [];
    while (match != null) {

        let upperCurrentMatch = match[0].toUpperCase();
        result.push(upperCurrentMatch);
        match = pattern.exec(input);
    }

    console.log(result.join(', '));
}
WordsUppercase('Hi, how are you?');
WordsUppercase('hello');