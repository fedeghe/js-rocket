function map(a) {
    return a.map(function(el) {return el % 2 === 0})
}

function mapWithFor(a) {
    var res = [];
    for (var i = 0, l = a.length; i < l; i++) {
        res.push(a[i] % 2 === 0);
    }
    return res;
}
function mapWithWhile(a) {
    var res = [],
        i = 0,
        l = a.length;
    while (i < l) {
        res.push(a[i++] % 2 === 0);
    }
    return res;
}

exports.map = map;
exports.mapWithFor = mapWithFor;
exports.mapWithWhile = mapWithWhile;