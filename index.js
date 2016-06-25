const util = require('util');

module.exports = function(prefix) {
    if (!prefix) return;

    var originalConsoleLog = console.log;
    console.log = function () {
        var updatedArgs = Array.prototype.slice.call(arguments);
        updatedArgs.unshift(prefix);
        originalConsoleLog(util.format.apply(this, updatedArgs));
    }
}