const util = require('util');

module.exports = function(prefix, hideLogLevel) {
    if (!prefix) return;

    var originalConsoleLog = console.log;
    console.log = function () {
        var logLevel = "[INFO]";
        if (hideLogLevel){
            logLevel = "";
        }

        var updatedArgs = [
            logLevel + prefix,
            util.format.apply(this, arguments)
        ];
        originalConsoleLog.apply(console, updatedArgs);
    };
    console.info = console.log;


    var originalConsoleWarn = console.warn;
    console.warn = function () {
        var logLevel = "[ERROR]";
        if (hideLogLevel){
            logLevel = "";
        }

        var updatedArgs = [
            logLevel + prefix,
            util.format.apply(this, arguments)
        ];
        originalConsoleWarn.apply(console, updatedArgs);
    };
    console.error = console.warn;
}
