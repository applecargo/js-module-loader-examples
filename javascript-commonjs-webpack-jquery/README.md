JavaScript-CommonJS-webpack-jQuery
==================================
```
JavaScript flavor: JavaScript
Module Spec:       CommonJS
Module Loader:     webpack
UI Framework:      jQuery
```

Concepts
--------
The most common [webpack](http://webpack.github.io/) workflow is to start at the main entry point of your JavaScript app and bundle it along with all the dependencies into a single file. The dependencies could be your own JavaScript modules or any third party modules such as jQuery. All you need to do is to specify your dependencies using the CommonJS `require()` function. For example,

```javascript
var $ = require('jquery');
var githubService = require('./github.service.js');
```

webpack can be configured using the file `webpack.config.js`, where you can specifiy the entry point of your application, the output file and several other options.

Setup
-----
Install webpack globally.

```bash
$ npm install webpack -g
```

Running the application
-----------------------
```bash
$ npm install
$ npm run build
$ npm start
```

Whenever you make a change to the source, you need to run `npm run build` again. This of course can be automated using a build tool such as gulp.
