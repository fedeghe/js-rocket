const path = require('path'),
    filename = path.basename(__filename),
    strategies = require('../src/arrayLoop'),
    { doPerfStraigth } = require('./data/utility.js');

doPerfStraigth(strategies, filename)