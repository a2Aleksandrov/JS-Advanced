const { lookupChar } = require('./lookUpChar');
const { expect } = require('chai');

describe('charLookUp checker', () => {
    it('checks if first input param is string', () => {
        expect(lookupChar([], 2)).to.equal(undefined, 'first input parameter should be of type "string"');
    });
    it('checks if second input param is integer', () => {
        expect(lookupChar('abc', '2')).to.equal(undefined, 'index should be of type "number"');
    });
    it('checks if index is out of bound', () => {
        expect(lookupChar('abc', 4)).to.equal('Incorrect index', 'index is out of bound');
        expect(lookupChar('abc', -1)).to.equal('Incorrect index', 'index is out of bound');
    });
    it('checks for correct result', () => {
        expect(lookupChar('abc', 2)).to.equal('c');
    });
    it('checks for incorect indexes', () => {
        expect(lookupChar('abc', 2.5)).to.equal(undefined, 'index cannot be a floating point number');
    });

});