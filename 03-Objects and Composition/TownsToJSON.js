function TownsToJSON(input) {

    class Town {
        constructor(town, latitude, longitude) {
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude);
        }
    }

    let result = [];
    input.shift();

    for (let ele of input) {
        let [townName, latitude, longitude] = ele.split('|').map(e => e.trim()).filter(x => x.length != 0);
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let town = new Town(townName, latitude, longitude)
        result.push(town);
    }
    return JSON.stringify(result);

}
console.log(TownsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
console.log(TownsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']));