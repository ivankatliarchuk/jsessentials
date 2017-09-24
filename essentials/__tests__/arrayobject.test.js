const car = require('../src/arrayobject');
const array = require('../src/arrayobject');

describe('function test', () => {
  it('return the text after routine call', () => {
    expect(car.drive()).toBe('drive');
  });
});

describe('array test', () => {
  it('return the text after routine call', () => {    
    expect(array[0]).toBe(undefined);
  });
});