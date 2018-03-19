# Javascript Constructors

## module.exports

Before the bulk of this lesson, it would be nice to do a small walkthrough of
how to work with module.exports. Here's an example:


```js
module.exports = 'just a string'
---------
// in node
> let thatString = require('./lib/filename.js')
> thatString
// => 'just a string'
```

```js
module.exports = user
---------
// in node
> let nowItsAnObject = require('./lib/filename.js')
> nowItsAnObject
// => {
//      name: 'Christoper Robin',
//      email: 'wdi@christopherRobin.com',
//      ...
//    }
```

```js
module.exports = {
  user: user,
  Runner: Runner,
  Run: Run
}
---------
// in node
> let objectHasMultipleAttrs = require('./lib/filename.js')
> // => {
> //      user: {
> //        name: 'Christoper Robin',
> //        email: 'wdi@christopherRobin.com',
> //        ...
> //      },
> //      Runner: function [Runner],
> //      Run: function [Run]
> //    }
```



## Delivery Notes


Consider a step-by-step walkthrough of the hero constructor function, probably
using the `node` shell.
