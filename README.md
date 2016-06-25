# global-console-prefix  

[![Build Status](https://travis-ci.org/camilin87/global-console-prefix.svg?branch=master)](https://travis-ci.org/camilin87/global-console-prefix)  

Add a your own prefix to every single console.log message.

## Usage  

```js
require("global-console-prefix")("[MONEY_APP]");

console.log("starting execution", {name: "crawler"});

//Output:
//[MONEY_APP] starting execution { name: 'crawler' }
```

## Remarks  
Only inserts the prefix for `console.log`. If no prefix is specified the default `console.log` is executed.
