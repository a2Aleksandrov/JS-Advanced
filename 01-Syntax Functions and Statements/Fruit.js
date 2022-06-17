function Fruit(fruitType, weight, pricePerKG) {

    let weightInKG = weight / 1000;

    let money = weightInKG * pricePerKG;


    console.log(`I need $${money.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruitType}.`);
}

Fruit('orange', 2500, 1.80);
Fruit('apple', 1563, 2.35);