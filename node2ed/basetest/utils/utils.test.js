const expect = require('expect');
const utils = require('./utils');

it('should add two numbers.', () => {
    let res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
});

it('should square two numbers.', () => {
    let res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
});

it('should expect some values', () => {
    expect(12).toNotBe(11);
    expect({
        name: 'Andrew',
        age: 25,
        location: 'Philadelphia'
    }).toInclude({
        age: 25
    });
});

// should verify fist and last names are set
it('should set firstName and lastName', () => {
    let user = { location: 'Philadelphia', age: 25 };
    let res = utils.setName(user, 'Andrew Mead');
   // expect(user).toEqual(res);
    expect(res).toInclude({
        firstName: 'Andrew',
        lastName: 'Mead'
    })
});