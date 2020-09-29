const path = require('path'),
    filename = path.basename(__filename),
    strategies = require('../src/compose'),
    { doPerf } = require('./data/utility.js');

doPerf.straightFunc(strategies, filename)