"use strict"

function name(fullname) {
    return 'Mr. ' + fullname.firstname + ' ' + fullname.lastname;
}

const nameC = name({firstname: 'Ivan', lastname: 'Ka'});

module.exports = {nameC};