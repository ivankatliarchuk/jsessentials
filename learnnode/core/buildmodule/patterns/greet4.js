function Greetr() {
    this.greeting = 'Hello Greet4';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;