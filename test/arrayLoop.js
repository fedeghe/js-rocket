const path = require('path'),
    filename = path.basename(__filename),
    strategies = require('../src/arrayLoop'),
    { doPerf } = require('./data/utility.js');

doPerf.straight(strategies, filename)