'use strict';

/**
 * Library called GREETR.
 * uses jquery on back
 */

(function (global, $) {
    let Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    let supportedLangs = ['en', 'es'];

    let greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    let formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    let logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    Greetr.prototype = {
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },
        validate: function () {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreetings: function() {
            return formalGreetings[this.language] + ',' + this.fullName();
        },

        gree: function(formal) {
            let msg;
            if (formal) {
                msg = this.formalGreetings();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ':' + this.fullName());
            }
            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        }
    };

    Greetr.init = function (firstName, lastName, language) {
        let self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    // add to global object and alias to G$
    global.Greetr = global.G$ = Greetr;


}(window, jQuery));