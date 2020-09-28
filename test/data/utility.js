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

const Reset = "\x1b[0m"
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"

const showPerf = (perf) => {
    const p = Object.keys(perf).sort((a, b) => perf[a] > perf[b] ? 1 : -1),
        l = p.length;
    p.forEach((k, i) => {
        let pre = false;
        if (i == 0) {   
            pre = `${FgGreen}%s${Reset}`;
        }
        if (i == l - 1) {   
            pre = `${FgRed}%s${Reset}`;
        }
        pre
        ? console.log(pre, `${k}: ~${perf[k]}ms`)
        : console.log(`${k}: ~${perf[k]}ms`)
    })
}

const times = 1e4,
    size = 1e3,
    arr = arrayOf(size, i => i * 2);

const doPerf = {
    straigth: (strategies, filename) => {
        const res = {},
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
    },
    apply: (strategies, filename) => {
        const res = {},
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
    }
};

exports.doPerf= doPerf;
