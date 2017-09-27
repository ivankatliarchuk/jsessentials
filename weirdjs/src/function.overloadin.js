'use strict';

function greet(firstname, lastname, language) {
    language = language || 'en';
    if (language == 'en') {
        return `Hello ${firstname} ${lastname}`;
    } else if (language === 'es') {
        return `Hola ${firstname} ${lastname}`;
    }
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'es');
}

module.exports = {greet};