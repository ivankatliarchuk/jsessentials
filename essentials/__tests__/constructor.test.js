"use strict"

describe('read apple data', () => {
    let apple;
    beforeEach(function (done) {
      apple = require('../src/constructor').apple;
      done();
    });
    it('red apple', () => {
      expect(apple.color).toBe('red');
    }); 
});


describe('reuse prototype', () => {
    let apple;
    beforeEach(function (done) {
      apple = require('../src/constructor').apple;
      done();
    });
    it('prototype apple', () => {
      expect(apple.eat()).toBe('Eat that APPLE');
    });
    it('expect exception', () => {
        expect(() => {
            apple.throw();
          }).toThrowError(/Too Big/);
    });
    it('prototype extra function', () => {
        expect(apple.extra()).toBe('Extra Taste');
    });
});