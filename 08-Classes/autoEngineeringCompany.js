function autoEngineeringCompany(input) {
    let cars = {};
    while (input.length > 0) {
        let [brand, model, quantity] = input.shift().split(' | ');

        quantity = Number(quantity);

        if (cars.hasOwnProperty(brand)) {
            if (cars[brand].hasOwnProperty(model)) {
                cars[brand][model] += quantity;
            } else {

                cars[brand][model] = quantity;
            }
        } else {

            cars[brand] = {};
            cars[brand][model] = quantity;
        }
    }
    
    for (let [brand, info] of Object.entries(cars)){
        console.log(brand);
        for (let [model, quantity] of Object.entries(info)) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}
autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'Audi | Q7 | 15',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);