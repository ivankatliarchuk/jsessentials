"use strict"

let hi = require('../src/closure').sayHi;
let greet = require('../src/closure').greet;

describe('testing this', () => {
       
    it('execute function', () => {
        expect(greet('Hi')('Tony')).toBe('Hi Tony');
    });
      
    it('execute function', () => {
        expect(hi('Pedro')).toBe('Hi Pedro');
    });
});