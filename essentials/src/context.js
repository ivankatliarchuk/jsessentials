"use strict"

// console.log(this);

var object = {
    prop: 'name',
    data: this,
    method: function() { return this; }
};

function global() {
    return this;
}
const value = global.call(this);
module.exports = {object, value};
