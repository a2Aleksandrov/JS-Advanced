class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables(vegetables) {
        let msg = [];
        for (let item of vegetables) {
            let [type, quantity, price] = item.split(' ');
            quantity = Number(quantity);
            price = Number(price);  
            let haveType = false;
            this.availableProducts.forEach(product => {
                if (product.type == type) {
                    haveType = true;
                    product.quantity += quantity;
                    if (product.price < price) {
                        product.price = price;
                    }
                }
            });
            if (haveType == false) {
                let newVegetable = { type, quantity, price };
                this.availableProducts.push(newVegetable);
                msg.push(type);
            }
        }
        return `Successfully added ${msg.join(', ')}`;
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let item of selectedProducts) {

            let [type, quantity] = item.split(' ')
            quantity = Number(quantity);
            let isPresent = false;
            this.availableProducts.forEach(product => {
                if (product.type == type) {
                    isPresent = true;
                    if (product.quantity < quantity) {
                        throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                    }
                    let productPrice = quantity * product.price;
                    product.quantity -= quantity;
                    totalPrice += productPrice;
                }
            });
            if (isPresent == false) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }
    rottingVegetable(type, quantity) {
        let isPresent = false;
        let result = [];
        this.availableProducts.forEach(product => {
            if (product.type == type) {
                isPresent = true;
                if (quantity > product.quantity) {
                    product.quantity = 0;
                    result.push(`The entire quantity of the ${product.type} has been removed.`);
                } else {
                    product.quantity -= quantity;
                    result.push(`Some quantity of the ${product.type} has been removed.`);
                }
            }
        });
        if (isPresent == false) {
            throw new Error(`${type} is not available in the store.`);
        }
        return `${result.join('\n')}`;
    }
    revision() {
        let result = [];
        this.availableProducts.sort((a, b) => a.price - b.price);
        for (let product of this.availableProducts) {
            result.push(`${product.type}-${product.quantity}-$${product.price}`);
        }
        return `Available vegetables:\n${result.join('\n')}\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
    }
}
