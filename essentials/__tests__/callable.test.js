"use strict"

describe('callabe test', () => {
    let name;
    beforeEach(function (done) {
      name = require('../src/callable').nameC;
      done();
    });
    it('return the text after routine call', () => {
      expect(name).toBe('Mr. Ivan Ka');
    }); 
  });