"use strict"

describe('read this pointer', () => {
    let object;
    beforeEach(function (done) {
      object = require('../src/context').object;
      done();
    });
    it('hoists the memory', () => {
      expect(object.prop).toBe('name');
    });
    it('property with this', () => {
       expect(object.data).toEqual({});
    });
    it('get it from method', () => {
        expect(object.method()).toEqual(object);
    });
    it('retrieve gloval value', () => {
        let value = require('../src/context').value;
        expect(value).toEqual({});
    });
});