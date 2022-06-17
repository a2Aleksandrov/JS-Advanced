function HeroicInventory(input) {

    const heroes = [];
    for (let ele of input) {
        let [name, level, item] = ele.split(' / ');
        level = Number(level);
        let items = [];
        if (item == undefined) {
            item = items;
        } else {

            [...items] = item.split(', ');
        }

        let curr = {
            name,
            level,
            items
        }
        heroes.push(curr);
    }
    const jsonDataHeroes = JSON.stringify(heroes);

    console.log(jsonDataHeroes);
}
HeroicInventory([
    'Isacc / 25 ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
HeroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']
);