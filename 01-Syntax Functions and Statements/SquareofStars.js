function SquareofStars(input = 5) {

    for (let i = input; i > 0; i--) {
        let result = '';

        for (let i = 0; i < input; i++) {
            result += ('*' + ' ')
        }
        console.log(result);
    }

}
SquareofStars();
