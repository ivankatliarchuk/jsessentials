"use strict"

let car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "diesel",
        pistons: [
            {
                make: "BMW"
            },
            {
                make: "BMW2"
            }
        ]
    },
    drive: () => {
        return "drive";
    }
}

let array = [
    'string',
    100,
    [ 'embed', 200],
    { car: "ford"},
    () => { return "dive"}
];

module.exports = car, array;

