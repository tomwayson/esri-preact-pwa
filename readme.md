# esri-preact-pwa

An example [progressive web app (PWA)](https://developers.google.com/web/progressive-web-apps/) using the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) built with [Preact](https://github.com/developit/preact).

![screen shot](https://cloud.githubusercontent.com/assets/662944/25562231/11e24fc6-2d35-11e7-955d-cbd7d1eec46d.png)

[View it live](https://esri-preact-pwa.now.sh/)

This repository was cloned from  [preact-starter](https://github.com/lukeed/preact-starter) and uses [esri-loader](https://github.com/Esri/esri-loader/) to lazy load an ArcGIS web map. See those repositories for more detailed information.

## Install

> :exclamation: **Pro Tip:** Use [Yarn](https://yarnpkg.com/) to install dependencies 3x faster than NPM!

```sh
git clone https://github.com/tomwayson/esri-preact-pwa
cd tomwayson/esri-preact-pwa
npm install
npm run build
npm start
```

## Features

* Offline Caching (via `serviceWorker`) (*coming soon*)
* SASS & Autoprefixer
* Asset Versioning (aka "cache-busting")
* ES2015 (ES6) and ES2016 (ES7) support
* Hot Module Replacement (HMR) for all files
* Preact's [Developer Tools](#preact-developer-tools)
* [Lighthouse](https://github.com/GoogleChrome/lighthouse) certified

  ![lightouse](src/static/img/lighthouse.jpg)

## Development

### Commands

Any of the following commands can (and should :wink:) be run from the command line.

> If using [Yarn](https://yarnpkg.com/), all instances of `npm` can be replaced with `yarn`. :ok_hand:

#### build

```
$ npm run build
```

Compiles all files. Output is sent to the `dist` directory.

#### start

```
$ npm start
```

Runs your application (from the `dist` directory) in the browser.

#### watch

```
$ npm run watch
```

Like [`start`](#start), but will auto-compile & auto-reload the server after any file changes within the `src` directory.

### Preact Developer Tools

You can inspect and modify the state of your Preact UI components at runtime using the [React Developer Tools](https://github.com/facebook/react-devtools) browser extension.

1. Install the [React Developer Tools](https://github.com/facebook/react-devtools) extension
2. [Import the `preact/devtools`](src/index.js#L23) module in your app
3. Reload and go to the 'React' tab in the browser's development tools

## License

MIT
