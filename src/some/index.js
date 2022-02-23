function check(e) {return e > 1900}

function some(a) {
    return a.some(check)
}

function someWithFor(a) {
    var res = false;
    for (var i = 0, l = a.length; i < l; i++) {
        res = res || check(a[i]);
        if (res) break
    }
    return res;
}
function someWithWhile(a) {
    var res = false,
        i = 0,
        l = a.length;
    while (i < l) {
        res = res || check(a[i++]);
        if(res) break;
    }
    return res;
}

exports.some = some;
exports.someWithFor = someWithFor;
exports.someWithWhile = someWithWhile;