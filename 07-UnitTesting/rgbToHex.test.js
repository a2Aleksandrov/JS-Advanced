const { expect } = require('chai');
const { rgbToHexColor } = require('./rgbToHex');

describe('rgb to hex checker', () => {
    it('works with white color', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF', 'doesn`t workd with white color')
    });
    it('works with black color', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000', 'doesn`t workd with black color')
    });
    it('doesn`t work if input is not in range', () => {
        expect(rgbToHexColor(256, 255, 255)).to.equal(undefined, 'input is not in range[0...255')
    });
    it('doesn`t work if input is not in range', () => {
        expect(rgbToHexColor(255, 256, 255)).to.equal(undefined, 'input is not in range[0...255')
    });
    it('doesn`t work if input is not in range', () => {
        expect(rgbToHexColor(255, 255, 256)).to.equal(undefined, 'input is not in range[0...255')
    });
    it('doesn`t work if input is not in range', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined, 'input is not in range[0...255')
    });
    it('doesn`t work if input is not in range', () => {
        expect(rgbToHexColor(0, -1, 0)).to.equal(undefined, 'input is not in range[0...255')
    });
    it('doesn`t work if input is not in range', () => {
        expect(rgbToHexColor(0, -1, 0)).to.equal(undefined, 'input is not in range[0...255')
    });
    it('doesn`t work if input is of invalid type', () => {
        expect(rgbToHexColor('15',15,15)).to.equal(undefined, 'invalid input type')
    });
   
});