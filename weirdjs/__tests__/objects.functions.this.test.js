"use strict"

describe('testing this', () => {
    let c = require('../src/objects.functions.this').c;    
    it('execute function', () => {
        c.log();
        expect(c.name).toBe('Updated again! The c object!');
    }); 
});