const { mathEnforcer } = require('./mathEnforcer');
const { expect } = require('chai');

describe('matchEnforcer checker', () => {
    describe('addFive checker', () => {
        it('checks if input is number', () => {
            expect(mathEnforcer.addFive('1')).equal(undefined, 'input should be of type "number"');
        });
        it('checks correct answer', () => {
            expect(mathEnforcer.addFive(1)).equal(6, 'expect result to be 6');
        });
        it('checks for floating point numbers', () => {
            expect(mathEnforcer.addFive(1.5)).equal(6.5, 'expect result to be 6.5');
        });
        it('checks for negative input', () => {
            expect(mathEnforcer.addFive(-1)).equal(4);
            
        });
    });
    describe('subtractTen checker', () => {
        it('checks if input is number', () => {
            expect(mathEnforcer.subtractTen('1')).equal(undefined, 'input should be of type "number"');
        });
        it('checks correct answer', () => {
            expect(mathEnforcer.subtractTen(1)).equal(-9, 'expect result to be 11');
        });
        it('checks for floating point numbers', () => {
            expect(mathEnforcer.subtractTen(10.5)).equal(0.5, 'expect result to be 0.5');
        });
        it('checks for negative input', () => {
            expect(mathEnforcer.subtractTen(-1)).equal(-11);
            
        });
    });
    describe('sum checker', () => {
        it('checks for correct input type', () => {
            expect(mathEnforcer.sum('1', 5)).equal(undefined);
            expect(mathEnforcer.sum(1, '5')).equal(undefined);
        });
        it('checks for correct result', () => {
            expect(mathEnforcer.sum(1, 5)).equal(6, 'expect result to be 6');
        })
        it('checks for negative input', () => {
            expect(mathEnforcer.sum(-1, 5)).equal(4);
            expect(mathEnforcer.sum(1, -5)).equal(-4);
        });
        it('checks for floating point numbers', () => {
            expect(mathEnforcer.sum(1.5, 2.5)).equal(4, 'expect result to be 4');
        });
    });

});