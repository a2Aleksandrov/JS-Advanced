function Person(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.toString = () => {
    return 'string from class Person';
}


function extendPrototype(classDef) {
    classDef.prototype.species = 'Human';
    classDef.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}
extendPrototype(Person)

const p = new Person('Ivan', 'Ivanov');
console.log(p.toSpeciesString());
console.log(p.species);