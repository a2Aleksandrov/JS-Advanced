function LowestPricesInCities(input) {

    let obj = {};
    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (obj[product] == undefined) {
            obj[product] = { town, price };
        } else if (obj[product].price > price) {

            obj[product] = { town, price };
        }
    }
    for (let productName in obj) {
        console.log(`${productName} -> ${obj[productName].price} (${obj[productName].town})`);
    }

}
LowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);
LowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'
]);