function juiceFlavours(input) {
    let bottles = new Map()

    let juice = {};

    for (let line of input) {

        let [flavour, quantity] = line.split(' => ')
        quantity = Number(quantity);
        if (juice[flavour]) {
            juice[flavour] += quantity;

        } else {

            juice[flavour] = quantity;
        }

        while (juice[flavour] >= 1000) {
            if (bottles.has(flavour)) {

                bottles.set(flavour, bottles.get(flavour) + 1);
            } else {
                bottles.set(flavour, 1);
            }
            juice[flavour] -= 1000;
        }

    }
    for (let [bottle, quantity] of bottles) {
        console.log(`${bottle} => ${quantity}`);
    }
}
juiceFlavours([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
juiceFlavours([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);