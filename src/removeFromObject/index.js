function nullO1 (o) {
    return Object.entries(o).reduce((acc, [k,v]) => {
        if(v!==null) {acc[k] = v}
        return acc
    }, {});
}

function nullO2 (o) {
    return Object.fromEntries(
        Object.entries(o).filter(([_, v]) => v !== null)
    );
}

function nullO3 (o) {
    var r = {};
    for (var k in o) 
        if (o[k] !== null) r[k] = o[k];
    return r;
}

function nullO4(obj) {
    return Object.assign(
        {},
        ...Object.entries(obj)
            .filter(([_, v]) => v !== null)
            .map(([k, v]) => ({ [k]: v }))
    );
}

exports.nullO1 = nullO1;
exports.nullO2 = nullO2;
exports.nullO3 = nullO3;
exports.nullO4 = nullO4;