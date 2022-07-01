const { expect } = require('chai');
const { cinema } = require('./cinema');

describe('Cinema Task', () => {
    it('showMovies - empty array',()=> {
        expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
    });
    it('showMovies - non-empty array',()=> {
        expect(cinema.showMovies(['movie1','movie2'])).to.equal('movie1, movie2');
    });
 
    it('ticketPrice - invalid type',()=> {
        expect(() => cinema.ticketPrice('test')).throw('Invalid projection type.');
    });
    it('ticketPrice - valid type',()=> {
       expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
    });
     it('ticketPrice - valid type',()=> {
         expect(cinema.ticketPrice('Normal')).to.equal(7.50);
    });
    it('ticketPrice - valid type',()=> {
        expect(cinema.ticketPrice('Discount')).to.equal(5.50);
     });
 
    it('swapSeatsInHall - invalid firstPlace',()=> {
        expect(cinema.swapSeatsInHall(0,5)).to.equal('Unsuccessful change of seats in the hall.');
    });
    it('swapSeatsInHall - invalid firstPlace',()=> {
        expect(cinema.swapSeatsInHall(22,5)).to.equal('Unsuccessful change of seats in the hall.');
    });
    it('swapSeatsInHall - invalid secondPlace',()=> {
        expect(cinema.swapSeatsInHall(1,1)).to.equal('Unsuccessful change of seats in the hall.');
    });
    it('swapSeatsInHall - invalid secondPlace',()=> {
        expect(cinema.swapSeatsInHall(1,21)).to.equal('Unsuccessful change of seats in the hall.');
    });
    it('swapSeatsInHall - invalid secondPlace',()=> {
        expect(cinema.swapSeatsInHall(1,'2')).to.equal('Unsuccessful change of seats in the hall.');
    });
    it('swapSeatsInHall - invalid secondPlace',()=> {
        expect(cinema.swapSeatsInHall(1,0)).to.equal('Unsuccessful change of seats in the hall.');
    });
    it('swapSeatsInHall - valid arguments',()=> {
        expect(cinema.swapSeatsInHall(1,2)).to.equal('Successful change of seats in the hall.');
    });
    it('swapSeatsInHall - valid arguments',()=> {
        expect(cinema.swapSeatsInHall(20,2)).to.equal('Successful change of seats in the hall.');
    });
    it('swapSeatsInHall - valid arguments',()=> {
        expect(cinema.swapSeatsInHall(19,20)).to.equal('Successful change of seats in the hall.');
    });
 
});