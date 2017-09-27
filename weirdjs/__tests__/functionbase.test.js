"use strict"

describe('function tests', () => {
    let greet = require('../src/functionbase').greet;
    let anonymousGreet = require('../src/functionbase').anonymousGreet;
    let nested = require('../src/functionbase').nested;

    it('return the text after call', () => {
      expect(greet()).toBe('Hi');
    });

    it.skip('return value provided with anonymous function', () => {
      expect(nested(() => {return 'nested'})).toBeEqual('nested');
    })
  });