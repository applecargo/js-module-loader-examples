TypeScript-SystemJS-jQuery
==========================
```
JavaScript flavor: TypeScript
Module Spec:       ES2015
Module Loader:     SystemJS
UI Framework:      jQuery
```

Concepts
--------
The TypeScript-SystemJS workflow involves the use of the [TypeScript Compiler](https://github.com/Microsoft/TypeScript/wiki/Compiler-Options) to transform ES2015 modules to a format that SystemJS can load. SystemJS is configured right inside `index.html` where we import `main.js`, the main entry point of our app.

```javascript
System.config({
    // This is required because TypeScript does not generate .js extensions
    "defaultJSExtensions":true,
    "paths": {
        "jquery": "jquery/dist/jquery.js"
    }
});
System.import("main.js");
```

The dependencies in JavaScript files are specified using the ES2015 `import` statements. For example,

```javascript
import $ from 'jquery';
import githubService from './github.service';
```

Note that we don't specify an extention for `github.service`. The TypeScript comiler assumes that it is a TypeScript file. However, this has an undesirable side-effect - the generated code has no file extension:

    var github_service_1 = require('./github.service');

This confuses the SystemJS loader. A workaround is to set `.js` as the default extension for SystemJS. See the `defaultJSExtensions` option in the SystemJS configuration above.

Another detail when using TypeScript is that you need to give type information to the compiler for every module. This includes external modules such as jQuery which are written in plain old JavaScript. The solution is to install type definitions for such modules. This is done using *TSD*, a package manager that installs TypeScript definition files directly from the community driven DefinitelyTyped repository. Installation instructions for this tool are included below.

Setup
-----
```bash
$ npm install tsd -g
```

Running the application
-----------------------
```bash
$ npm install
$ tsd install
$ npm run build
$ npm start
```

Whenever you make a change to the source, you need to run `npm run build` again. This of course can be automated using a build tool such as gulp.
