function straightFor(a) {
    var s = 0
    for (var i  = 0, l = a.length; i < l; i++) {
        s += a[i]
    }
    return s
}

function straightWhile(a) {
    var i = -1,
        l = a.length,
        s = 0;
    while (++i < l) {
        s += a[i]
    }
    return s
}
function invertedWhile(a) {
    var l = a.length, s = 0;
    while (--l) s += a[l]
    return s
}

function reduce(a) {
    return a.reduce(function (acc, e) {
        return acc + e
    }, 0)
}


exports.straightFor = straightFor;
exports.straightWhile = straightWhile;
exports.invertedWhile = invertedWhile;
exports.reduce = reduce;