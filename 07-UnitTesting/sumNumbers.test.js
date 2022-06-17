const { expect } = require('chai');
const { sumNumbers } = require('./sumNumbers');

describe('SumNumbers checker', () => {
    it('checks if arr hs no numbers', () => {
        expect(sumNumbers(['a', 'b', 'c'])).to.be.NaN;
    });
    
    it('doesn`t work if arr has element which is not a number', () => {
        expect(sumNumbers([1, 2, 'a'])).to.be.NaN;
    });
    it('checks for correct result', () => {
        expect(sumNumbers([1, 2, 3])).to.equal(6);
        expect(sumNumbers([0])).to.equal(0);
    });
});