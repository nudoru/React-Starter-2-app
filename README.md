# React-Starter-2-app

Bootstrap starter for React 15 projects with hot reloading and SASS styles. Built with Webpack 2 beta. Components are intended for mocks and are generally not functional.

- React
    - React Router
    - Autobind Decorator
    - React Mixin
    - React Catalyst
- JavaScript
    - Babel: Stage-0, Es2015 loose, React
    - ESLint
    - Modernizer
    - polyfill.io
- CSS
    - Normalize.css from github.com/necolas/normalize.css
    - SASS indented
    - PostCSS: autoprefixer

Static assets for the front end are `front/www/*` and all app development files are located in `front/app/*`.
On build, the `front/www/js/app` directory is cleaned and new code is bundled there. 

JS Entry point is `front/app/index.js`
SASS is `front/app/index.sass`

## Docker

I'm experimenting with a Docker based workflow. Current setup is based on this post https://medium.com/@andyccs/webpack-and-docker-for-development-and-deployment-ae0e73243db4#.dmfqhhbyk

## Build options

`npm run dev` to start the webpack-dev-server with hot reloading at localhost:3000. Will also open the default browser to the site.
`npm run build:prod` to clean and create a production build of the app
`npm run dev:server` will start an Nodemon/Express web server at localhost:8080 for developing server code
`npm start` will start an Express web server at localhost:8080

## Notes

- When the application start, it will try to load ./front/www/config.json for special configuration options for the running app. If there is a problem, a warning will appear in the log and the app will try to run normally.
- Webpack-dev-server runs with --history-api-fallback to enabled React-Router routes to work for an SPA.

# TODO

## Front (for mocks)

### New mocks

- Pagination controls
- Flexbox grid

### Enhancements 

- Sticky footer
- Navigationbar: option for link in addition to route
- Navigationbar: search text field functional
- Navigationbar: drop down menu
- Card header image

## Server

- RestAPI endpoints