'use strict';

const expect = require('expect');

const { generateMessage } = require('./message');

describe('generate message', () => {
    it('should generate the correct message object', () => {
        let message = generateMessage('Alex', 'Coolio');
        expect(message.from).toBe('Alex');
        expect(message.text).toBe('Coolio');
        expect(typeof message.createdAt).toBe('number');
    });
});