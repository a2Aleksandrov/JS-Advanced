function CarFactory(order) {

    const engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    const carriages = [{ type: 'hatchback', color: order.color }, { type: 'coupe', color: order.color }];
    const wheelsize = order.wheelsize % 2 == 1 ? order.wheelsize : order.wheelsize - 1;
    let engineFn = () => {

        for (let engine of engines) {
            if (engine.power >= order.power) {
                return engine;
            }
        };
    }
    let carriageFn = () => {
        for (let carriage of carriages) {
            if (carriage.type == order.carriage) {
                return carriage;
            };
        }
    }
    return {
        model: order.model,
        engine: engineFn(),
        carriage: carriageFn(),
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]

    };
}

const input = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
const result = CarFactory(input);
console.log(result)

