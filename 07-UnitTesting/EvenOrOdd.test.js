const { exppext, expect } = require('chai');
const { isOddOrEven } = require('./EvenOrOdd');

describe('evenOrOdd checker', () => {
    it('check for odd length', () => {
        expect(isOddOrEven('abc')).to.equal('odd', 'doesn`t work with odd length');
    });
    it('check for even length', () => {
        expect(isOddOrEven('abcd')).to.equal('even', 'doesn`t work with even length');
    });
    it('check for empty string', () => {
        expect(isOddOrEven('')).to.equal(0, 'doesn`t work with empty string');
    });
    it('check for empty string', () => {
        expect(isOddOrEven('')).to.equal(0, 'doesn`t work with empty string');
    });
    it('check for non-string imput', () => {
        expect(isOddOrEven(1)).to.equal(undefined, 'doesn`t work with non-string');
    });
});