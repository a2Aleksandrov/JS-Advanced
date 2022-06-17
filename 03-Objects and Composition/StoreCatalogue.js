function StoreCatalogue(catalog) {
    let obj = {};
    let sorted = catalog.sort((a, b) => a.localeCompare(b));

    for (let ele of sorted) {
        let [product, price] = ele.split(' : ');
        price = Number(price);
        obj[product] = price;

    }
    let groupChange = '';
    for (let prod in obj) {
        group = prod[0];
        if (group != groupChange) {

            groupChange = group;
            console.log(group);
        }
        console.log(`  ${prod}: ${obj[prod]}`);
    }
}
StoreCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
StoreCatalogue(['Banana : 2',
    'Rubic`s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'])