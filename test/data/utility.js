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

    p.forEach((k, i) => {
        let pre = false,
            post = 'fastest';
        if (i == 0) {   
            pre = `${FgGreen}%s${Reset}`;
        } else {
            post = `~${(perf[k]/fasterV).toFixed(1)}X slower`
        }
        if (i == l - 1) {   
            pre = `${FgRed}%s${Reset}`;
        }
        pre
        ? console.log(pre, `${k}: ~${(perf[k]*1e3).toFixed(1)}µs ${post}`)
        : console.log(`${k}: ~${(perf[k]*1e3).toFixed(1)}µs ${post}`)
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
    },
    s = {
        straight : strat => strat(arr),
        appl : strat => strat.apply(null, arr),
        straightFunc : strat => strat.apply(null, arrFunc).apply(null, arr),
    },
    doPerf = (strat, strategies, filename) => {
        const res = {},
            perf = {};
        for(strategy in strategies){
            let i = 0,
                start = +new Date,
                end;
            while(i++ < times) {
                res[strategy] = s[strat](strategies[strategy])
            }
            end = + new Date
            perf[strategy] = (end - start) / times
        }
        report(filename, perf, res);
    };

exports.doPerf= doPerf;
