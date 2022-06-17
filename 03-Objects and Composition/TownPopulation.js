function TownPopulation(townData) {

    let result = {};
    for (let ele of townData) {
        let [city, population] = ele.split(' <-> ');
        population = Number(population);
        if (result[city] != undefined) {

            population += result[city];
        }
        result[city] = population;

    }
    for (let key in result) {

        console.log(`${key} : ${result[key]}`);
    }
}
TownPopulation(
    ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']);
TownPopulation(
    ['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000']);   