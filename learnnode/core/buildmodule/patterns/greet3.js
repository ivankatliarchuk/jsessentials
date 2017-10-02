function Greetr() {
    this.greeting = 'Hello Greet3';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();