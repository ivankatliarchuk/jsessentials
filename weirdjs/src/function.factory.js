'use strict';

function factory(language) {
    return function(firstname, lastname) {
        if (language == 'en') {
            return `Hello ${firstname} ${lastname}`;
        } else if (language === 'es') {
            return `Hola ${firstname} ${lastname}`;
        }
    }
}

var greetEnglish = factory('en');
console.log(greetEnglish('john', 'travolta'));
