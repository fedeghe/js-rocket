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


exports.arrayOf = arrayOf;
exports.check = check;