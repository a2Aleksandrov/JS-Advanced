function CityRecord(name, population, treasury) {

    let city = {
        name,
        population,
        treasury,
    }

    return city;
}
console.log(CityRecord('Tortuga', 7000, 15000));
console.log(CityRecord('Santo Domingo', 12000, 23500));