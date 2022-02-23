function check(e) {return e < 1e6}

function every(a) {
    return a.every(check)
}

function everyWithFor(a) {
    var res = true;
    for (var i = 0, l = a.length; i < l; i++) {
        res = res && check(a[i]);
        if (!res) break
    }
    return res;
}
function everyWithWhile(a) {
    var res = true,
        i = 0,
        l = a.length;
    while (i < l) {
        res = res && check(a[i++]);
        if(!res) break;
    }
    return res;
}

exports.every = every;
exports.everyWithFor = everyWithFor;
exports.everyWithWhile = everyWithWhile;