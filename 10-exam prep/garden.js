class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        spaceRequired = Number(spaceRequired);
        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        }
        let newPlant = { plantName, spaceRequired, ripe: false, quantity: 0 }
        this.plants.push(newPlant);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }
    ripenPlant(plantName, quantity) {
        quantity = Number(quantity);

        let noPlant = false;
        for (let plant of this.plants) {
            noPlant = false;
            if (plant.plantName == plantName && plant.ripe == false) {
                if (quantity <= 0) {
                    throw new Error('The quantity cannot be zero or negative.');
                } else {
                    plant.ripe = true;
                    plant.quantity += quantity;
                    if (quantity == 1) {
                        return `${quantity} ${plantName} has successfully ripened.`;
                    } else {
                        return `${quantity} ${plantName}s have successfully ripened.`;
                    }
                }
            } else if (plant.plantName == plantName && plant.ripe == true) {
                throw new Error(`The ${plantName} is already ripe.`)
            } else {
                noPlant = true;
            }
        }
        if (noPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

    }
    harvestPlant(plantName) {
        let notFound = false;
        for (let plant of this.plants) {
            notFound = false;
            if (plant.plantName == plantName && plant.ripe == false) {
                throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
            }
            if (plant.plantName == plantName && plant.ripe == true) {

                this.spaceAvailable += plant.spaceRequired;

                let index = this.plants.indexOf(plant);
                this.plants.splice(index, 1);
                delete plant.ripe;
                delete plant.spaceRequired;
                this.storage.push(plant);
                return `The ${plantName} has been successfully harvested.`
            } else {
                notFound = true;
            }
        }
        if (notFound) {

            throw new Error(`There is no ${plantName} in the garden.`);
        }
    }
    generateReport() {

        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let plantsInGarden = [];
        for (let plant of this.plants) {
            plantsInGarden.push(plant.plantName);
        }
        if (this.storage.length == 0) {
            return `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: ${plantsInGarden.join(', ')}\nPlants in storage: The storage is empty.`;
        } else {
            let result = [];
            for (let plant of this.storage) {
                let piece = `${plant.plantName} (${plant.quantity})`;
                result.push(piece);
            }
            return `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: ${plantsInGarden.join(', ')}\nPlants in storage: ${result.join(', ')}`;
        }
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());