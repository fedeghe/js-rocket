Array.prototype.redu = function(fn, init){
    var arr = this,
        acc = init;
    for (var i = 0, l = arr.length; i < l ; i++) {
      acc = fn(acc, arr[i], i, arr)
    }
    return acc
}


function reduce(a) {
    return a.reduce(function (acc, el) { return acc + el }, 0);
}
function reducePolluted(a) {
    return a.redu(function (acc, el) { return acc + el }, 0);
}

function reduceWithFor(a) {
    var res = 0;
    for (var i = 0, l = a.length; i < l; i++) {
        res += a[i];
    }
    return res;
}
function reduceWithWhile(a) {
    var res = 0,
        i = 0,
        l = a.length;
    while (i < l) {
        res += a[i++];
    }
    return res;
}

function escapableReduceWithFor(arr, fn = (a,e) => a+e, init = 0, exitFn) {
    let acc = init,
        i = 0;
    const l = arr.length
    for (null; i < l; i++) {
        if (exitFn && exitFn(acc, arr[i], i, arr)) break
        acc = fn(acc, arr[i], i, arr)
    }
    return acc
};

exports.reduce = reduce;
exports.reduceWithFor = reduceWithFor;
exports.reduceWithWhile = reduceWithWhile;
exports.reducePolluted = reducePolluted;
exports.escapableReduceWithFor = escapableReduceWithFor;