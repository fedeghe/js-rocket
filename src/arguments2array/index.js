function slice() {
    return [].slice.call(arguments);
}

function concat() {
    return [].concat.apply([], arguments);
}
function pushApply() {
    var a = [];
    [].push.apply(a, arguments);
    return a
}

function forLoop() {
    var res = [];
    for (var i = 0, l = arguments.length; i < l; i++) {
        res.push(arguments[i])
    }
    return res;
}

function map() {
    return [].map.call(arguments, e => e)
}

exports.slice = slice;
exports.concat = concat;
exports.forLoop = forLoop;
exports.map = map;
exports.pushApply = pushApply;