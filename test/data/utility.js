const assert = require('assert');
    
const arrayOf = (n, fn) => new Array(n).fill().map((_, i) => fn(i));

const check = (name, res) => {
    describe(name, () => {
        it('all strategies should have same result', () => {
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
};

const showPerf = (perf) => {
    const Reset = "\x1b[0m",
        FgRed = "\x1b[31m",
        FgGreen = "\x1b[32m",
        p = Object.keys(perf).sort((a, b) => perf[a] > perf[b] ? 1 : -1),
        l = p.length,
        fasterK = p[0],
        fasterV = perf[fasterK];
    // console.log(perf)
    // console.log(p)
    p.forEach((k, i) => {
        let pre = false,
            post = 'fastest';
        if (i == 0) {   
            pre = `${FgGreen}%s${Reset}`;
        } else {
            post = `~${~~(perf[k]/fasterV)}X slower`
        }
        if (i == l - 1) {   
            pre = `${FgRed}%s${Reset}`;
        }
        pre
        ? console.log(pre, `${k}: ~${perf[k]}ms ${post}`)
        : console.log(`${k}: ~${perf[k]}ms ${post}`)
    })
};


const times = 1e4,
    size = 1e3,
    arr = arrayOf(size, i => i * 2),
    arrFunc = [
        s => 2 ** 3,
        a => [].concat(a).reduce((acc, el) => acc + el, 0)
    ],
    report = (filename, perf, res) => {
        console.log(`\nTEST ${filename}`)
        showPerf(perf);
        check(filename, res);
    }
    doPerf = {
        straight: (strategies, filename) => {
            const res = {},
                perf = {};
            for(strategy in strategies){
                let i = 0,
                    start = +new Date;
                while(i++ < times) {
                    res[strategy] = strategies[strategy](arr)
                }
                var end = + new Date
                perf[strategy] = end-start
            }
            report(filename, perf, res);
        },
        apply: (strategies, filename) => {
            const res = {},
                perf = {};
            for (strategy in strategies){
                let i = 0,
                    start = +new Date;
                while(i++ < times) {
                    res[strategy] = strategies[strategy].apply(null, arr)
                }
                var end = + new Date
                perf[strategy] = end-start
            }
            report(filename, perf, res);
        },
        straightFunc: (strategies, filename) => {
            const res = {},
                perf = {};
            for (strategy in strategies){
                let i = 0,
                    start = +new Date;
                while(i++ < times) {
                    res[strategy] = strategies[strategy].apply(null, arrFunc).apply(null, arr)
                }
                var end = + new Date
                perf[strategy] = end-start
            }
            report(filename, perf, res);
        }
    };

exports.doPerf= doPerf;
