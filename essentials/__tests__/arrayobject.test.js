'use strict';

describe('function test', () => {
  const car = require('../src/arrayobject').car;
  test('return the text after routine call', () => {
    expect(car.drive()).toBe('drive');
  });

  it('will show how to access member', () => {
    expect(car.engine.size).toBe(2.0);
  })
});

describe('array test', () => {
  let array;
  beforeEach(function (done) {
    array = require('../src/arrayobject').array;
    done();
  });
  it('return the text after routine call', () => {
    expect(array[0]).toBe('string');
  });
  it('assing new value', () => {
    array[0] = 'newdata';
    expect(array[0]).toBe('newdata');
  });  
  test('delete element out of an array', () => {
    expect(array.length).toBe(7);
    array.shift();
    expect(array.length).toBe(6);
  });
  test('pop last value ', () => {
    expect(array[5]).toBe('toremove');
    array.pop();
    expect(array[5]).toBe(undefined);
  });  
});

describe('change one of the values', () => {
  const car = require('../src/arrayobject').car;
  test('return the default engine size', () => {
    expect(car.engine.size).toBe(2.0);
  }); 
  test('return the upgraded engine size', () => {
    car.engine.size = 3.0;
    expect(car.engine.size).toBe(3.0);
  });
});

describe('delete property', () => {
  const car = require('../src/arrayobject').car;
  beforeEach(function (done) {
    delete car.speed;
    done();
  });
  test('should not have property', () => {    
    expect(car.hasOwnProperty('speed')).toBe(false);
  });
});