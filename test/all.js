const arguments2array = require('../src/arguments2array'),
    arrayLoop = require('../src/arrayLoop'),
    compose = require('../src/compose'),
    every = require('../src/every'),
    filter = require('../src/filter'),
    map = require('../src/map'),
    reduce = require('../src/reduce'),
    some = require('../src/some'),
    { doPerf } = require('./data/utility.js');

doPerf('appl', arguments2array, 'arguments2array');
doPerf('straight', arrayLoop, 'arrayLoop');
doPerf('straightFunc', compose, 'compose');
doPerf('straight', every, 'every');
doPerf('straight', filter, 'filter');
doPerf('straight', map, 'map');
doPerf('straight', reduce, 'reduce');
doPerf('straight', some, 'some');