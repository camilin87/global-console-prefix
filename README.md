# global-console-prefix  

[![Build Status](https://travis-ci.org/camilin87/global-console-prefix.svg?branch=master)](https://travis-ci.org/camilin87/global-console-prefix)  

Add a your own prefix to every single `console` message.

## Usage  

```js
require("global-console-prefix")("[MONEY_APP]");

console.log("starting execution", {name: "crawler"});
console.info("starting execution", {name: "crawler"});
console.warn("starting execution", {name: "crawler"});
console.error("starting execution", {name: "crawler"});

//Output:
//[INFO][MONEY_APP] starting execution { name: 'crawler' }
//[INFO][MONEY_APP] starting execution { name: 'crawler' }
//[ERROR][MONEY_APP] starting execution { name: 'crawler' }
//[ERROR][MONEY_APP] starting execution { name: 'crawler' }
```


## Remarks  
Executes the default `console` methods when no prefix is specified.  

Hides the log level when a second parameter is specified.  

```js
require("global-console-prefix")("[MONEY_APP]", true);
```
