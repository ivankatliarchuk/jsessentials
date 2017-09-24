'use strict';
const car = require('../src/arrayobject');
const array = require('../src/arrayobject');

describe('function test', () => {
  test('return the text after routine call', () => {
    expect(car.drive()).toBe('drive');
  });

  it('will show how to access member', () => {
    expect(car.engine.size).toBe(2.0);
  })
});

describe('array test', () => {
  it('return the text after routine call', () => {
    expect(array[0]).toBe(undefined);
  });
});