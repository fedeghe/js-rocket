function filter(a) {
    return a.filter(function(el) {return el % 2 === 0})
}
function filterWithReduce(a) {
    return a.reduce(function(acc, el) {
        if (el % 2 === 0) acc.push(el)
        return acc
    }, [])
}
function filterWithFor(a) {
    var res = [];
    for (var i = 0, l = a.length; i < l; i++) {
        if (a[i] % 2 === 0) {
            res.push(a[i]);
        }
    }
    return res;
}

function filterWithForFunc(a, func) {
    var res = [];
    for (var i = 0, l = a.length; i < l; i++) {
        if (func(a[i])) {
            res.push(a[i]);
        }
    }
    return res;
}

function filterWithForFuncExt(a) {
    var res = [];
    for (var i = 0, l = a.length; i < l; i++) {
        if (filterWithForFuncExt_function(a[i])) {
            res.push(a[i]);
        }
    }
    return res;
}

function filterWithForFuncExt_function(a) {return a % 2 === 0}

exports.filter = filter;
exports.filterWithReduce = filterWithReduce;
exports.filterWithFor = filterWithFor;
exports.filterWithForFuncExt = filterWithForFuncExt;
exports.filterWithForFunc = a => filterWithForFunc(a, el => el % 2 === 0);