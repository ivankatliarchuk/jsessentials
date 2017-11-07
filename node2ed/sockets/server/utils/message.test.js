'use strict';

const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generate message', () => {
    it('should generate the correct message object', () => {
        let message = generateMessage('Alex', 'Coolio');
        expect(message.from).toBe('Alex');
        expect(message.text).toBe('Coolio');
        expect(typeof message.createdAt).toBe('number');
    });
});

describe('generate location message', () => {
    it('should generate the correct location object', () => {
        let message = generateLocationMessage('Alex', 56.72, -1.89);
        expect(message.from).toBe('Alex');
        expect(message.url).toBe('http://google.com/maps?q=56.72,-1.89');
        expect(typeof message.createdAt).toBe('number');
    });
});