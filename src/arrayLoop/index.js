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
    // s += 20
    return s
}


exports.straightFor = straightFor;
exports.straightWhile = straightWhile;