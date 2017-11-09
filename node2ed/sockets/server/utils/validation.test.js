'use strict';

const expect = require('expect');

const { isRealStreang } = require('./validation')

describe('Is Real String', () => {
    it('should reject non-string values', () => {
        let res = isRealStreang(98);
        expect(res).toBeFalsy();
    });

    it('should reject string with only spaces', () => {
        let res = isRealStreang(' ');
        expect(res).toBeFalsy();
    });

    it('should allow string with non-space characters', () => {
        let res = isRealStreang('  Alex  ');
        expect(res).toBeTruthy();
    });
});
