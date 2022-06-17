function CalorieObject(input) {

    let calories = {};
    for (let i = 0; i < input.length; i += 2) {
        let product = input[i];
        let calorie = input[i + 1]
        calories[product] = Number(calorie);
    }
    return calories;
}
console.log(CalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(CalorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));