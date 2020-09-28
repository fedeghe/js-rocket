const path = require('path'),
    filename = path.basename(__filename),
    strategies = require('../src/arguments2array'),
    { doPerf } = require('./data/utility.js');

doPerf.apply(strategies, filename);
