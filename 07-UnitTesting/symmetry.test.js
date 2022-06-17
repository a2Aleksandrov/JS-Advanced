const { expect } = require('chai');
const { isSymmetric } = require('./symmetry');


describe('Symmetric checker', () => {

    it('works with symmetric numeric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('should take and array as input', () => {
        expect(isSymmetric('abba')).to.be.false;
    });
    it('doesn`t work with non-symmetric array', () => {
        expect(isSymmetric(['a', 'a', 'b', 'b'])).to.be.false;
    });
    it('works with string array', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });
    it('works with odd array length', () => {
        expect(isSymmetric(['a', 'b', 'a'])).to.be.true;
    });
    it('doesn`t work if elements are of different type', () => {
        expect(isSymmetric(['1', '2', 1])).to.be.false;
    });

});
