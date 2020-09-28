const path = require('path'),
    filename = path.basename(__filename),
    strategies = require('../src/arguments2array'),
    { doPerfApply } = require('./data/utility.js');

doPerfApply(strategies, filename);
