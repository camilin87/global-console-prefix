var rfr = require("rfr");

describe("globalConsolePrefix", function () {
    var originalConsoleLog = null;

    beforeEach(function () {
        originalConsoleLog = console.log;
    });

    describe("when no prefix is specified", function(){

    });

    describe("when a prefix is specified", function(){

    });

    afterEach(function(){
        console.log = originalConsoleLog;
    });
});