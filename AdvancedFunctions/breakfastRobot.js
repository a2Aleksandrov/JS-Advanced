function breakfastRobot() {

    let carbohydrate = 0;
    let protein = 0;
    let fat = 0;
    let flavour = 0;

    let storage = {
        protein,
        carbohydrate,
        fat,
        flavour
    }
    let apple = { 'carbohydrate': 1, 'flavour': 2 };
    let lemonade = { 'carbohydrate': 10, 'flavour': 20 };
    let burger = { 'carbohydrate': 5, 'fat': 7, 'flavour': 3 };
    let eggs = { 'protein': 5, 'fat': 1, 'flavour': 1 };
    let turkey = { 'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10, };

    let dataBase = {
        apple,
        lemonade,
        burger,
        eggs,
        turkey
    }

    function execution(input) {
        if (input == 'report') {
            let report = [];
            for (let [el, qty] of Object.entries(storage)) {
                report.push(`${el}=${qty}`);
            }

            return report.join(' ');
        }
        let [command, element, qty] = input.split(' ');
        qty = Number(qty);
        if (command == 'restock') {
            storage[element] += qty;
            return `Success`;
        } else if (command == 'prepare') {

            let breakfast = dataBase[element];
            let neededQuantity = Object.assign({}, breakfast);
            Object.entries(neededQuantity).forEach(el => { neededQuantity[el[0]] = el[1] * qty });
            let enoughQuantity = true;
            for (let [ingredient, quantity] of Object.entries(neededQuantity)) {
                if (storage[ingredient] < quantity) {
                    enoughQuantity = false;
                    return `Error: not enough ${ingredient} in stock`;
                }
            }
            if (enoughQuantity == true) {
                Object.entries(breakfast).forEach(ingredient => { storage[ingredient[0]] -= neededQuantity[ingredient[0]] });
                return `Success`;
            }
        }
    }
    return execution;
}
let manager = breakfastRobot();
// console.log (manager ("restock flavour 50"));
// console.log (manager ("restock carbohydrate 7"));
// console.log (manager ("restock fat 12"));
// console.log (manager ("restock protein 9"));

// console.log (manager ("prepare lemonade 4"));
// console.log (manager ("prepare eggs 4"));
// console.log (manager ("prepare eggs 1"));
// console.log (manager ("prepare apple 1"));


console.log(manager("report"));



// let apple = { 'carbohydrate': 1, 'flavour': 2 };
// let lemonade = { 'carbohydrate': 10, 'flavour': 20 };
// let burger = { 'carbohydrate': 5, 'fat': 7, 'flavour': 3 };
// let eggs = { 'protein': 5, 'fat': 1, 'flavour': 1 };
// let turkey = { 'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10, };