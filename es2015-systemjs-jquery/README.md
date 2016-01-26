ES2015-SystemJS-jQuery
======================
```
JavaScript flavor: ES2015
Module Spec:       ES2015
Module Loader:     SystemJS
UI Framework:      jQuery
```

Concepts
--------
The ES2015-SystemJS workflow involves the use of [babel-cli](https://babeljs.io/docs/usage/cli/) and Babel's [SystemJS plugin](https://babeljs.io/docs/plugins/transform-es2015-modules-systemjs/) to transform ES2015 modules to the SystemJS format. SystemJS is configured right inside `index.html` where we import `main.js`, the main entry point of our app. The dependencies in JavaScript files are specified using the ES2015 `import` statements. For example,

```javascript
import $ from 'jquery';
import githubService from './github.service.js';
```

Running the application
-----------------------
```bash
$ npm install
$ npm run build
$ npm start
```

Whenever you make a change to the source, you need to run `npm run build` again. This of course can be automated using a build tool such as gulp.
