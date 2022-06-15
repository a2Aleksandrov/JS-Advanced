function CircleArea(input) {
    let result = 0;
    let inputType = typeof input;
    if ((inputType == 'number') && (Number.isNaN(input) == false)) {
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}
CircleArea(5);
CircleArea('name');   