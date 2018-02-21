# Hasura Auth UI Kit

> Get started with our Auth web UI kit.

This UI Kit can be used to quickstart your web application with screens for Authentication. Depending on hasura project's auth configuration, this UI kit displays only auth providers enabled on the project's cluster.

## Getting started

1. Build your library

* Run `yarn install` (recommended) or `npm install` to get the project's dependencies
* Run `yarn build` or `npm run build` to produce minified version of your library.

2. Development mode

* Having all the dependencies installed run `npm start`. This command will generate an non-minified version of your library and will run a watcher so you get the compilation on file change.

## Usage

* The main URL is at `/ui`. You can access it at `http://localhost:3000/ui`
* `index.html` is present inside `public/index.html`
* All the routes are defined in the file `src/Main.js`
* Stylesheet is maintained in a common file for the entire app present at `src/styles.css`
