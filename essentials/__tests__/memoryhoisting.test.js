"use strict"

describe('memory hoisting test', () => {
    let name;
    beforeEach(function (done) {
      name = require('../src/memoryhoisting').printName;
      done();
    });
    it('hoists the memory', () => {
      expect(name()).toBe('John Doe');
    }); 
});