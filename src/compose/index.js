function compose1() {
    var args = arguments,
        start = args.length - 1;
    return function() {
        var i = start,
            result = args[start].apply(this, arguments);
        while (i--) result = args[i].call(this, result);
        return result;
    };
};

function compose2() {
    var args = [].slice.call(arguments);
    return function () {
        var a = [].slice.call(arguments);
        return args.reduceRight(function (acc, fn) {
            return fn.call(null, acc);
        }, a);
    }   
}

const compose3 = (...args) => (...a) => args.reduceRight(
    (acc, fn) => fn.call(null, acc),
    a
)


exports.compose1 = compose1;
exports.compose2 = compose2;
exports.compose3 = compose3;