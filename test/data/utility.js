const assert = require('assert');
    
const arrayOf = (n, fn) => new Array(n).fill().map((_, i) => fn(i));

const check = (name, res) => {
    describe(name, () => {
        it('should have same result', () => {
            let r = null
            for (var strategy in res) {
                if (!r) {
                    r = JSON.stringify(res[strategy])
                    continue
                } 
                assert.strictEqual(r, JSON.stringify(res[strategy]));
                r = JSON.stringify(res[strategy])
            }
        })
    })
}

const showPerf = (perf) => {
    Object.keys(perf).sort((a, b) => perf[a] > perf[b] ? 1 : -1).forEach(k => {
        console.log(`${k}: ~${perf[k]}ms`)
    })
}

const doPerfStraigth = (strategies, filename) => {
    const times = 1e3,
        size = 1e4,
        arr = arrayOf(size, i => i * 2),
        res = {},
        perf = {};

    console.log(`\nTEST ${filename}`)

    for(strategy in strategies){
        let i = 0,
            start = +new Date;
        while(i++ < times) {
            res[strategy] = strategies[strategy](arr)
        }
        var end = + new Date
        perf[strategy] = end-start
    }
    showPerf(perf);
    check(filename, res);
};
const doPerfApply = (strategies, filename) => {
    const times = 1e3,
        size = 1e4,
        arr = arrayOf(size, i => i * 2),
        res = {},
        perf = {};

    console.log(`\nTEST ${filename}`)

    for (strategy in strategies){
        let i = 0,
            start = +new Date;
        while(i++ < times) {
            res[strategy] = strategies[strategy].apply(null, arr)
        }
        var end = + new Date
        perf[strategy] = end-start
    }
    showPerf(perf);
    check(filename, res);
};

exports.doPerfStraigth = doPerfStraigth;
exports.doPerfApply = doPerfApply;
