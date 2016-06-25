var rfr = require("rfr");

describe("globalConsolePrefix", function () {
    var originalConsoleLog = null;
    var captured_text = "";
    var intercept = null;
    var unhook = null;

    beforeAll(function(){
        intercept = require("intercept-stdout");
        unhook = intercept(function(txt) {
            captured_text += txt;

            if (txt.includes(".")){
                return txt;
            }
            else{
                return "";
            }
        });
    });

    afterAll(function(){
        unhook();
    });

    beforeEach(function () {
        captured_text = "";
        originalConsoleLog = console.log;
    });

    afterEach(function(){
        console.log = originalConsoleLog;
    });

    describe("when no prefix is specified", function(){
        it ("writes single string", function(){
            console.log("something");

            expect(captured_text).toBe("something\n");
        });

        it ("writes multiple strings", function(){
            console.log("something", "nothing");

            expect(captured_text).toBe("something nothing\n");
        });

        it ("writes numbers", function(){
            console.log(1);

            expect(captured_text).toBe("1\n");
        });

        it ("writes multiple numbers", function(){
            console.log(1, 2, 3);

            expect(captured_text).toBe("1 2 3\n");
        });

        it ("writes arrays", function(){
            console.log([1, 2, 3]);

            expect(captured_text).toBe("[ 1, 2, 3 ]\n");
        });

        it ("writes objects", function(){
            console.log({
                name: "pepe",
                weight: 12
            });

            expect(captured_text).toBe("{ name: 'pepe', weight: 12 }\n");
        });

        it ("writes multiple objects", function(){
            console.log({
                name: "pepe",
                weight: 12
            }, {
                name: "mom",
                weight: 1
            });

            expect(captured_text).toBe(
                "{ name: 'pepe', weight: 12 } { name: 'mom', weight: 1 }\n"
            );
        });

        it ("writes mixed contents", function(){
            console.log("age", 34, "presenter", {
                name: "pepe",
                weight: 12
            });

            expect(captured_text).toBe("age 34 presenter { name: 'pepe', weight: 12 }\n");
        });
    });

    describe("when a prefix is specified", function(){

    });
});