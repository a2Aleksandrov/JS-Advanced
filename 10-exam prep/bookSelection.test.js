const { expect } = require('chai');
const { bookSelection } = require('./bookSelection');

describe('bookSelection checker', () => {
    describe('isGenreSuitable checker', () => {

        it('checks if the book is suitable for children', () => {
            expect(bookSelection.isGenreSuitable('Horror', 12)).equal('Books with Horror genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Thriller', 12)).equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 13)).equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Thriller', 13)).equal('Those books are suitable');
        });
    });
    describe('isItAffordable checker', () => {
        it('checks if the price is number', () => {
            let price = '2';
            let budget = 1;
            expect(() => { bookSelection.isItAffordable(price, budget) }).to.throw('Invalid input');
        });
        it('checks if the budget is number', () => {
            let price = 2;
            let budget = '1';
            expect(() => { bookSelection.isItAffordable(price, budget) }).to.throw('Invalid input');
        });
        it('checks if the book is affordable', () => {
            let price = 1;
            let budget = 2;
            expect(bookSelection.isItAffordable(price, budget)).equal(`Book bought. You have ${budget - price}$ left`);
        });
        it('checks if the book is affordable', () => {
            let price = 2;
            let budget = 1;
            expect(bookSelection.isItAffordable(price, budget)).equal("You don't have enough money");
        });
    });
    describe('suitableTitles checker', () => {

        it('trows error with books not an array', () => {
            let books = '{ title: "The Da Vinci Code", genre: "Thriller" } { title: "Second", genre: "Drama" }';
            let wantedGenre = 'Thriller';

            expect(() => { bookSelection.suitableTitles(books, wantedGenre) }).to.throw('Invalid input');
        });

        it('trows error with wantedGenre not a string', () => {
            let books = [{ title: "The Da Vinci Code", genre: "Thriller" },
            { title: "Second", genre: "Drama" }];
            let wantedGenre = 2;
            expect(() => { bookSelection.suitableTitles(books, wantedGenre) }).to.throw('Invalid input');
        });

        it('trows error with no arguments', () => {
            expect(() => { bookSelection.suitableTitles() }).to.throw('Invalid input');
        });

        it('trows error with 1 argument', () => {
            let books = [{ title: "The Da Vinci Code", genre: "Thriller" },
            { title: "Second", genre: "Drama" }];
            expect(() => { bookSelection.suitableTitles(books) }).to.throw('Invalid input');
        });
    })
});
