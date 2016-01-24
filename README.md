# JavaScript Module Loader Examples

Traditionally JavaScript didn't have any out-of-the-box way to modularize code. At best, people wrote their code in different files using various *module patterns* and concatenated these files before execution. Recently a number of module definition standards and loaders have sprung up to provide more robust modularization solutions. However, the sheer number of these solutions is mind boggling! The objective of this project is to provide simple examples of using some of the popular modularization solutions so that you can decide which one is the best for you.

We use a simple web app called *Github Repository Viewer* to show how it can be modularized. The application itself allows you to enter the name of a Github organization and displays the repositories owned by the organization, sorted by their star ratings. Here's a screen shot of the application.

<img src="assets/github-repository-viewer.png" width="400">

The simplest implementation is in the `plain-old-javascript` folder which uses (obviously) plain old JavaScript and the tried-and-tested *Revealing Module Pattern* to modularize the app, specifically the [GithubService](https://github.com/archfirst/js-module-loader-examples/blob/master/plain-old-javascript/src/github.service.js). Other folders focus on different combinations of module definition specifications (such as ES2015 and TypeScript), module loaders and front-end frameworks. For example, the folder `es2015-systemjs` uses the ES2015 module specification along with the SystemJS module loader. Each folder contains a README.md file that describes the specifics of the environment.

If there is a module specification/loader that is not covered by this project and you are really passionate about it, please feel free to send us a pull request with your contribution. Note that you should create a separate directory for your contribution based on the guidelines above.

## Common Setup

Before running the applications in any sub-folder, we recommend that you to set up [lite-server](https://github.com/johnpapa/lite-server), a lightweight web server that will easily serve up your application and will automatically refresh the browser as you make code changes.

```bash
$ npm install lite-server -g
```

Once lite-server is installed, you can generally change directory to any of the subfolders and run the app using the following commands:

```bash
$ npm install
$ npm start
```
