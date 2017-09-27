"use strict"

describe('testing this', () => {
    let greet = require('../src/function.overloadin').greet;    
    it('execute function', () => {
        expect(greet('Ivan', 'Sem', 'en'))
        .toBe('Hello Ivan Sem');
    });
    it('execute function', () => {
        expect(greet('Ivan', 'Sem', 'es'))
        .toBe('Hola Ivan Sem');
    }); 
});