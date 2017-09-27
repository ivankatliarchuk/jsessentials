"use strict"

describe('testing this', () => {
    let greetFunc = require('../src/function.iife').greetFunc;    
    it('execute function', () => {
        expect(greetFunc)
        .toBe('Hello Pedro');
    });
});