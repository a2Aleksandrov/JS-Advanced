class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0
    }
    addCar(model, horsePower, price, mileage) {
        if (model == '' || horsePower < 0 || Number.isInteger(horsePower) == false || price < 0 || mileage < 0) {
            throw new Error('Invalid input!')
        }
        let newCar = { model, horsePower, price, mileage };
        this.availableCars.push(newCar);
        return `New car added: ${model} - ${horsePower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;

    }
    sellCar(model, desiredMileage) {
        let haveCar = false;
        for (let car of this.availableCars) {
            if (car.model == model) {
                haveCar = true;
                let horsepower = car.horsePower;
                let diff = car.mileage - desiredMileage;
                let soldPrice = 0;
                if (car.mileage <= desiredMileage) {
                    soldPrice = car.price;
                } else if (diff <= 40000) {
                    soldPrice = car.price - (5 * car.price) / 100;
                } else if (diff >= 40000) {
                    soldPrice = car.price - (10 * car.price) / 100;
                }
                let newSoldCar = { model, horsepower, soldPrice };
                this.soldCars.push(newSoldCar);
                this.availableCars.splice(this.availableCars.indexOf(car), 1);
                this.totalIncome += soldPrice;
                return `${model} was sold for ${soldPrice.toFixed(2)}$`;
            }
        }
        if (haveCar == false) {
            throw new Error(`${model} was not found!`);
        }
    }
    currentCar() {
        if (this.availableCars.length == 0) {
            return `There are no available cars`;
        } else {

            let result = [];
            for (let car of this.availableCars) {
                result.push(`---${car.model} - ${car.horsePower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
            }

            return `-Available cars:\n${result.join('\n')}`
        }
    }
    salesReport(criteria) {

        if (criteria == 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria == 'model') {
            this.availableCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error('Invalid criteria!');
        }
        let result = [];
        for (let car of this.soldCars) {
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);
        }
        return `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n${result.join('\n')}`
    }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));