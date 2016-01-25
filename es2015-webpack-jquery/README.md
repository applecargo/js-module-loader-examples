ES2015-webpack-jQuery
=====================
```
JavaScript flavor: ES2015
Module Spec:       ES2015
Module Loader:     webpack
UI Framework:      jQuery
```

Concepts
--------
The ES2015-webpack workflow is very similar to the JavaScript-CommonJS-webpack workflow. The only difference is that we are using the Babel loader to convert ES2015 module syntax to ES5 syntax. [webpack](http://webpack.github.io/) starts at `main.js`, the main entry point of our app and bundles it along with all the dependencies into a single file. The dependencies are specified using the ES2015 `import` statements. For example,

```javascript
import $ from 'jquery';
import githubService from './github.service.js';
```

webpack is configured using the file `webpack.config.js`, where we specifiy the entry point, the output file and several other options.

Running the application
-----------------------
```bash
$ npm install
$ npm run build
$ npm start
```

Whenever you make a change to the source, you need to run `npm run build` again. This of course can be automated using a build tool such as gulp.
