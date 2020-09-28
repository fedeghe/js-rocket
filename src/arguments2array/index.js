function sliceCall() {
    return [].slice.call(arguments);
}
function sliceApply() {
    return [].slice.apply(arguments);
}

function concatApply() {
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

exports.sliceCall = sliceCall;
exports.sliceApply = sliceApply;
exports.concatApply = concatApply;
exports.pushApply = pushApply;
exports.forLoop = forLoop;
exports.map = map;