const path = require('path'),
    filename = path.basename(__filename),
    strategies = require('../src/arguments2array'),
    { arrayOf, check, showPerf } = require('./data/utility.js'),
    times = 1e3,
    size = 1e4,
    arr = arrayOf(size, i => i * 2),
    res = {},
    perf = {};

console.log(`\nTEST ${filename}`)

for (strategy in strategies){
    let i = 0,
        start = +new Date;
    // console.time(strategy)
    while(i++ < times) {
        res[strategy] = strategies[strategy].apply(null, arr)
    }
    // console.timeEnd(strategy)
    var end = + new Date
    perf[strategy] = end-start
    // console.log(`date based ${strategy}: ${end-start}`)
}

showPerf(perf);

check(filename, res);
