const util = require('util');

module.exports = function(prefix) {
    if (!prefix) return;

    var originalConsoleLog = console.log;
    console.log = function () {
        var updatedArgs = [
            prefix,
            util.format.apply(this, arguments)
        ];
        originalConsoleLog.apply(console, updatedArgs);
    };
    console.info = console.log;


    var originalConsoleWarn = console.warn;
    console.warn = function () {
        var updatedArgs = [
            prefix,
            util.format.apply(this, arguments)
        ];
        originalConsoleWarn.apply(console, updatedArgs);
    };
    console.error = console.warn;


    var originalConsoleTrace = console.trace;
    console.trace = function () {
        var updatedArgs = [
            prefix,
            util.format.apply(this, arguments)
        ];
        originalConsoleTrace.apply(console, updatedArgs);
    };
}
