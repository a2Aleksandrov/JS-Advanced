const { expect } = require('chai');
const { library } = require('./library');

describe('checking library functionality', () => {
    it('checks calcPriceOfBook - non-string input', () => {
        expect(() => { library.calcPriceOfBook([], 2000).throw('Invalid input') });
    });
    it('checks calcPriceOfBook - non-integer input', () => {
        expect(() => { library.calcPriceOfBook('bookName', 2000.5).throw('Invalid input') });
    });
    it('checks calcPriceOfBook - non-number input', () => {
        expect(() => { library.calcPriceOfBook('bookName', '2000').throw('Invalid input') });
    });
    it('checks calcPriceOfBook - valid input', () => {
        expect(library.calcPriceOfBook('bookName', 2000)).equal('Price of bookName is 20.00');
    });
    it('checks calcPriceOfBook - valid input, year less than 1980', () => {
        expect(library.calcPriceOfBook('bookName', 1900)).equal('Price of bookName is 10.00');
    });
    it('checks calcPriceOfBook - valid input, year == 1980', () => {
        expect(library.calcPriceOfBook('bookName', 1900)).equal('Price of bookName is 10.00');
    });
    it('checks calcPriceOfBook - no book', () => {
        expect(library.calcPriceOfBook('', 2000)).equal('Price of  is 20.00');
    });
    it('checks calcPriceOfBook - result not fixed', () => {
        let price = 20;
        expect(library.calcPriceOfBook('book', 2000)).equal(`Price of book is ${price.toFixed(2)}`);
    });
    it('checks findBook - input array length = 0', () => {
        expect(() => { library.findBook([], 'bookName').throw('No books currently available') });
    });
    it('checks findBook - book available in the array', () => {
        expect(library.findBook(['book1', 'book2'], 'book1')).equal('We found the book you want.');
    });
    it('checks findBook - book not available in the array', () => {
        expect(library.findBook(['book1', 'book2'], 'book3')).equal('The book you are looking for is not here!');
    });
    it('checks findBook - searched book is empty string', () => {
        expect(library.findBook(['book1', 'book2'], '')).equal('The book you are looking for is not here!');
    });
    it('checks arrangeTheBooks - input not a number', () => {
        expect(() => { library.arrangeTheBooks('20').throw('Invalid input') });
    });
    it('checks arrangeTheBooks - input not an integer', () => {
        expect(() => { library.arrangeTheBooks(20.5).throw('Invalid input') });
    });
    it('checks arrangeTheBooks - input is negative number', () => {
        expect(() => { library.arrangeTheBooks(-20).throw('Invalid input') });
    });
    it('checks arrangeTheBooks - not enough space', () => {
        expect(library.arrangeTheBooks(41)).equal('Insufficient space, more shelves need to be purchased.');
    });
    it('checks arrangeTheBooks - available space', () => {
        expect(library.arrangeTheBooks(40)).equal('Great job, the books are arranged.');
    });
    it('checks arrangeTheBooks - no books', () => {
        expect(library.arrangeTheBooks(0)).equal('Great job, the books are arranged.');
    });
});