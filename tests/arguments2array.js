const {
        slice,
        concat,
        forLoop,
        map
    } = require('../src/arguments2array'),
    arr = require('./data/array.json'),
    times = 1e3;


const strategies = [
    slice,
    concat,
    forLoop,
    map
];

const res = {}

strategies.forEach(strategy => {
    let i = 0;
    const name = strategy.name
    console.time(name)
    while(i++ < times) {
        res[name] = strategy.apply(null, arr)
    }
    console.timeEnd(name)

})
// console.log(res)

