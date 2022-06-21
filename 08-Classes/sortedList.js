class List {
    constructor() {
        this.array = [];
        this.size = this.array.length;
    }
    add(element) {
        this.array.push(element);
        this.array.sort((a, b) => a - b);
        this.size++;
    }
    get(index) {
        if (index < 0 || index >= this.array.length) {
            throw new Error('Index is outside the length of the array.');
        } else {
            return this.array[index];
        }

    }
    remove(index) {
        if (index < 0 || index >= this.array.length) {
            throw new Error('Index is outside the length of the array.');
        } else {
            this.array.splice(index, 1);
            this.size--;
        }
    }
}

let myList = new List()

myList.add(5);
myList.add(7);
console.log(myList.array);
