const assert = require('assert'),
    path = require('path'),
    filename = path.basename(__filename),
    strategies = require('../src/arrayLoop'),
    { arrayOf, check } = require('./data/utility.js'),
    times = 1e3,
    size = 1e4,
    arr = arrayOf(size, i => i * 2),
    res = {};

console.log(`\nTEST : ${filename}`)

for(strategy in strategies){
    let i = 0;
    console.time(strategy)
    while(i++ < times) {
        res[strategy] = strategies[strategy](arr)
    }
    console.timeEnd(strategy)
}

check(filename, res)