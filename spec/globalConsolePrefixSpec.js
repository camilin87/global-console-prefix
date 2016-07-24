var rfr = require("rfr");

describe("globalConsolePrefix", function () {
    var originalConsoleLog = null;
    var originalConsoleInfo = null;
    var originalConsoleWarn = null;
    var originalConsoleError = null;
    var originalConsoleTrace = null;
    var originalConsoleTime = null;
    var originalConsoleTimeEnd = null;

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
        originalConsoleInfo = console.info;
        originalConsoleWarn = console.warn;
        originalConsoleError = console.error;
        originalConsoleTrace = console.trace;
        originalConsoleTime = console.time;
        originalConsoleTimeEnd = console.timeEnd;
    });

    afterEach(function(){
        console.log = originalConsoleLog;
        console.info = originalConsoleInfo;
        console.warn = originalConsoleWarn;
        console.error = originalConsoleError;
        console.trace = originalConsoleTrace;
        console.time = originalConsoleTime;
        console.timeEnd = originalConsoleTimeEnd;
    });

    describe("when no prefix is specified", function(){
        describe("console.log", function(){
            it ("writes single string", function(){
                console.log("something");

                expect(captured_text).toBe("something\n");
            });

            it ("does not write formatted string if format is not the first arg", function(){
                console.log("[SAMPLE]", "[%s]", "something");

                expect(captured_text).toBe("[SAMPLE] [%s] something\n");
            });

            it ("writes formatted string", function(){
                console.log("[%s]", "something");

                expect(captured_text).toBe("[something]\n");
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

        describe("console.info", function(){
            it ("writes single string", function(){
                console.info("something");

                expect(captured_text).toBe("something\n");
            });

            it ("does not write formatted string if format is not the first arg", function(){
                console.info("[SAMPLE]", "[%s]", "something");

                expect(captured_text).toBe("[SAMPLE] [%s] something\n");
            });

            it ("writes formatted string", function(){
                console.info("[%s]", "something");

                expect(captured_text).toBe("[something]\n");
            });

            it ("writes multiple strings", function(){
                console.info("something", "nothing");

                expect(captured_text).toBe("something nothing\n");
            });

            it ("writes numbers", function(){
                console.info(1);

                expect(captured_text).toBe("1\n");
            });

            it ("writes multiple numbers", function(){
                console.info(1, 2, 3);

                expect(captured_text).toBe("1 2 3\n");
            });

            it ("writes arrays", function(){
                console.info([1, 2, 3]);

                expect(captured_text).toBe("[ 1, 2, 3 ]\n");
            });

            it ("writes objects", function(){
                console.info({
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toBe("{ name: 'pepe', weight: 12 }\n");
            });

            it ("writes multiple objects", function(){
                console.info({
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
                console.info("age", 34, "presenter", {
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toBe("age 34 presenter { name: 'pepe', weight: 12 }\n");
            });
        });

        describe("console.warn", function(){
            it ("writes single string", function(){
                console.warn("something");

                expect(captured_text).toBe("something\n");
            });

            it ("does not write formatted string if format is not the first arg", function(){
                console.warn("[SAMPLE]", "[%s]", "something");

                expect(captured_text).toBe("[SAMPLE] [%s] something\n");
            });

            it ("writes formatted string", function(){
                console.warn("[%s]", "something");

                expect(captured_text).toBe("[something]\n");
            });

            it ("writes multiple strings", function(){
                console.warn("something", "nothing");

                expect(captured_text).toBe("something nothing\n");
            });

            it ("writes numbers", function(){
                console.warn(1);

                expect(captured_text).toBe("1\n");
            });

            it ("writes multiple numbers", function(){
                console.warn(1, 2, 3);

                expect(captured_text).toBe("1 2 3\n");
            });

            it ("writes arrays", function(){
                console.warn([1, 2, 3]);

                expect(captured_text).toBe("[ 1, 2, 3 ]\n");
            });

            it ("writes objects", function(){
                console.warn({
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toBe("{ name: 'pepe', weight: 12 }\n");
            });

            it ("writes multiple objects", function(){
                console.warn({
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
                console.warn("age", 34, "presenter", {
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toBe("age 34 presenter { name: 'pepe', weight: 12 }\n");
            });
        });

        describe("console.error", function(){
            it ("writes single string", function(){
                console.error("something");

                expect(captured_text).toBe("something\n");
            });

            it ("does not write formatted string if format is not the first arg", function(){
                console.error("[SAMPLE]", "[%s]", "something");

                expect(captured_text).toBe("[SAMPLE] [%s] something\n");
            });

            it ("writes formatted string", function(){
                console.error("[%s]", "something");

                expect(captured_text).toBe("[something]\n");
            });

            it ("writes multiple strings", function(){
                console.error("something", "nothing");

                expect(captured_text).toBe("something nothing\n");
            });

            it ("writes numbers", function(){
                console.error(1);

                expect(captured_text).toBe("1\n");
            });

            it ("writes multiple numbers", function(){
                console.error(1, 2, 3);

                expect(captured_text).toBe("1 2 3\n");
            });

            it ("writes arrays", function(){
                console.error([1, 2, 3]);

                expect(captured_text).toBe("[ 1, 2, 3 ]\n");
            });

            it ("writes objects", function(){
                console.error({
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toBe("{ name: 'pepe', weight: 12 }\n");
            });

            it ("writes multiple objects", function(){
                console.error({
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
                console.error("age", 34, "presenter", {
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toBe("age 34 presenter { name: 'pepe', weight: 12 }\n");
            });
        });

        describe("console.trace", function(){
            it ("writes single string", function(){
                console.trace("something");

                expect(captured_text).toContain("Trace: something\n");
            });

            it ("does not write formatted string if format is not the first arg", function(){
                console.trace("[SAMPLE]", "[%s]", "something");

                expect(captured_text).toContain("Trace: [SAMPLE] [%s] something\n");
            });

            it ("writes formatted string", function(){
                console.trace("[%s]", "something");

                expect(captured_text).toContain("Trace: [something]\n");
            });

            it ("writes multiple strings", function(){
                console.trace("something", "nothing");

                expect(captured_text).toContain("Trace: something nothing\n");
            });

            it ("writes numbers", function(){
                console.trace(1);

                expect(captured_text).toContain("Trace: 1\n");
            });

            it ("writes multiple numbers", function(){
                console.trace(1, 2, 3);

                expect(captured_text).toContain("Trace: 1 2 3\n");
            });

            it ("writes arrays", function(){
                console.trace([1, 2, 3]);

                expect(captured_text).toContain("Trace: [ 1, 2, 3 ]\n");
            });

            it ("writes objects", function(){
                console.trace({
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toContain("Trace: { name: 'pepe', weight: 12 }\n");
            });

            it ("writes multiple objects", function(){
                console.trace({
                    name: "pepe",
                    weight: 12
                }, {
                    name: "mom",
                    weight: 1
                });

                expect(captured_text).toContain(
                    "Trace: { name: 'pepe', weight: 12 } { name: 'mom', weight: 1 }\n"
                );
            });

            it ("writes mixed contents", function(){
                console.trace("age", 34, "presenter", {
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toContain("Trace: age 34 presenter { name: 'pepe', weight: 12 }\n");
            });
        });
    });

    describe("when a prefix is specified", function(){
        beforeEach(function(){
            rfr("index")("[GLOBAL] -");
        })

        describe("console.log", function(){
            it ("writes single string", function(){
                console.log("something");

                expect(captured_text).toBe("[GLOBAL] - something\n");
            });

            it ("does not write formatted string if format is not the first arg", function(){
                console.log("[SAMPLE]", "[%s]", "something");

                expect(captured_text).toBe("[GLOBAL] - [SAMPLE] [%s] something\n");
            });

            it ("writes formatted string", function(){
                console.log("[%s]", "something");

                expect(captured_text).toBe("[GLOBAL] - [something]\n");
            });


            it ("writes multiple strings", function(){
                console.log("something", "nothing");

                expect(captured_text).toBe("[GLOBAL] - something nothing\n");
            });

            it ("writes numbers", function(){
                console.log(1);

                expect(captured_text).toBe("[GLOBAL] - 1\n");
            });

            it ("writes multiple numbers", function(){
                console.log(1, 2, 3);

                expect(captured_text).toBe("[GLOBAL] - 1 2 3\n");
            });

            it ("writes arrays", function(){
                console.log([1, 2, 3]);

                expect(captured_text).toBe("[GLOBAL] - [ 1, 2, 3 ]\n");
            });

            it ("writes objects", function(){
                console.log({
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toBe("[GLOBAL] - { name: 'pepe', weight: 12 }\n");
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
                    "[GLOBAL] - { name: 'pepe', weight: 12 } { name: 'mom', weight: 1 }\n"
                );
            });

            it ("writes mixed contents", function(){
                console.log("age", 34, "presenter", {
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toBe("[GLOBAL] - age 34 presenter { name: 'pepe', weight: 12 }\n");
            });
        });

        describe("console.info", function(){
            it ("writes single string", function(){
                console.info("something");

                expect(captured_text).toBe("[GLOBAL] - something\n");
            });

            it ("does not write formatted string if format is not the first arg", function(){
                console.info("[SAMPLE]", "[%s]", "something");

                expect(captured_text).toBe("[GLOBAL] - [SAMPLE] [%s] something\n");
            });

            it ("writes formatted string", function(){
                console.info("[%s]", "something");

                expect(captured_text).toBe("[GLOBAL] - [something]\n");
            });


            it ("writes multiple strings", function(){
                console.info("something", "nothing");

                expect(captured_text).toBe("[GLOBAL] - something nothing\n");
            });

            it ("writes numbers", function(){
                console.info(1);

                expect(captured_text).toBe("[GLOBAL] - 1\n");
            });

            it ("writes multiple numbers", function(){
                console.info(1, 2, 3);

                expect(captured_text).toBe("[GLOBAL] - 1 2 3\n");
            });

            it ("writes arrays", function(){
                console.info([1, 2, 3]);

                expect(captured_text).toBe("[GLOBAL] - [ 1, 2, 3 ]\n");
            });

            it ("writes objects", function(){
                console.info({
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toBe("[GLOBAL] - { name: 'pepe', weight: 12 }\n");
            });

            it ("writes multiple objects", function(){
                console.info({
                    name: "pepe",
                    weight: 12
                }, {
                    name: "mom",
                    weight: 1
                });

                expect(captured_text).toBe(
                    "[GLOBAL] - { name: 'pepe', weight: 12 } { name: 'mom', weight: 1 }\n"
                );
            });

            it ("writes mixed contents", function(){
                console.info("age", 34, "presenter", {
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toBe("[GLOBAL] - age 34 presenter { name: 'pepe', weight: 12 }\n");
            });
        });

        describe("console.warn", function(){
            it ("writes single string", function(){
                console.warn("something");

                expect(captured_text).toBe("[GLOBAL] - something\n");
            });

            it ("does not write formatted string if format is not the first arg", function(){
                console.warn("[SAMPLE]", "[%s]", "something");

                expect(captured_text).toBe("[GLOBAL] - [SAMPLE] [%s] something\n");
            });

            it ("writes formatted string", function(){
                console.warn("[%s]", "something");

                expect(captured_text).toBe("[GLOBAL] - [something]\n");
            });


            it ("writes multiple strings", function(){
                console.warn("something", "nothing");

                expect(captured_text).toBe("[GLOBAL] - something nothing\n");
            });

            it ("writes numbers", function(){
                console.warn(1);

                expect(captured_text).toBe("[GLOBAL] - 1\n");
            });

            it ("writes multiple numbers", function(){
                console.warn(1, 2, 3);

                expect(captured_text).toBe("[GLOBAL] - 1 2 3\n");
            });

            it ("writes arrays", function(){
                console.warn([1, 2, 3]);

                expect(captured_text).toBe("[GLOBAL] - [ 1, 2, 3 ]\n");
            });

            it ("writes objects", function(){
                console.warn({
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toBe("[GLOBAL] - { name: 'pepe', weight: 12 }\n");
            });

            it ("writes multiple objects", function(){
                console.warn({
                    name: "pepe",
                    weight: 12
                }, {
                    name: "mom",
                    weight: 1
                });

                expect(captured_text).toBe(
                    "[GLOBAL] - { name: 'pepe', weight: 12 } { name: 'mom', weight: 1 }\n"
                );
            });

            it ("writes mixed contents", function(){
                console.warn("age", 34, "presenter", {
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toBe("[GLOBAL] - age 34 presenter { name: 'pepe', weight: 12 }\n");
            });
        });

        describe("console.error", function(){
            it ("writes single string", function(){
                console.error("something");

                expect(captured_text).toBe("[GLOBAL] - something\n");
            });

            it ("does not write formatted string if format is not the first arg", function(){
                console.error("[SAMPLE]", "[%s]", "something");

                expect(captured_text).toBe("[GLOBAL] - [SAMPLE] [%s] something\n");
            });

            it ("writes formatted string", function(){
                console.error("[%s]", "something");

                expect(captured_text).toBe("[GLOBAL] - [something]\n");
            });


            it ("writes multiple strings", function(){
                console.error("something", "nothing");

                expect(captured_text).toBe("[GLOBAL] - something nothing\n");
            });

            it ("writes numbers", function(){
                console.error(1);

                expect(captured_text).toBe("[GLOBAL] - 1\n");
            });

            it ("writes multiple numbers", function(){
                console.error(1, 2, 3);

                expect(captured_text).toBe("[GLOBAL] - 1 2 3\n");
            });

            it ("writes arrays", function(){
                console.error([1, 2, 3]);

                expect(captured_text).toBe("[GLOBAL] - [ 1, 2, 3 ]\n");
            });

            it ("writes objects", function(){
                console.error({
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toBe("[GLOBAL] - { name: 'pepe', weight: 12 }\n");
            });

            it ("writes multiple objects", function(){
                console.error({
                    name: "pepe",
                    weight: 12
                }, {
                    name: "mom",
                    weight: 1
                });

                expect(captured_text).toBe(
                    "[GLOBAL] - { name: 'pepe', weight: 12 } { name: 'mom', weight: 1 }\n"
                );
            });

            it ("writes mixed contents", function(){
                console.error("age", 34, "presenter", {
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toBe("[GLOBAL] - age 34 presenter { name: 'pepe', weight: 12 }\n");
            });
        });

        describe("console.trace", function(){
            it ("writes single string", function(){
                console.trace("something");

                expect(captured_text).toContain("[GLOBAL] - Trace: something\n");
            });

            it ("does not write formatted string if format is not the first arg", function(){
                console.trace("[SAMPLE]", "[%s]", "something");

                expect(captured_text).toContain("[GLOBAL] - Trace: [SAMPLE] [%s] something\n");
            });

            it ("writes formatted string", function(){
                console.trace("[%s]", "something");

                expect(captured_text).toContain("[GLOBAL] - Trace: [something]\n");
            });


            it ("writes multiple strings", function(){
                console.trace("something", "nothing");

                expect(captured_text).toContain("[GLOBAL] - Trace: something nothing\n");
            });

            it ("writes numbers", function(){
                console.trace(1);

                expect(captured_text).toContain("[GLOBAL] - Trace: 1\n");
            });

            it ("writes multiple numbers", function(){
                console.trace(1, 2, 3);

                expect(captured_text).toContain("[GLOBAL] - Trace: 1 2 3\n");
            });

            it ("writes arrays", function(){
                console.trace([1, 2, 3]);

                expect(captured_text).toContain("[GLOBAL] - Trace: [ 1, 2, 3 ]\n");
            });

            it ("writes objects", function(){
                console.trace({
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toContain("[GLOBAL] - Trace: { name: 'pepe', weight: 12 }\n");
            });

            it ("writes multiple objects", function(){
                console.trace({
                    name: "pepe",
                    weight: 12
                }, {
                    name: "mom",
                    weight: 1
                });

                expect(captured_text).toContain(
                    "[GLOBAL] - Trace: { name: 'pepe', weight: 12 } { name: 'mom', weight: 1 }\n"
                );
            });

            it ("writes mixed contents", function(){
                console.trace("age", 34, "presenter", {
                    name: "pepe",
                    weight: 12
                });

                expect(captured_text).toContain("[GLOBAL] - Trace: age 34 presenter { name: 'pepe', weight: 12 }\n");
            });
        });
    });
});