<div align="center">
<h1>
constrct.js 

:construction:
</h1>

![BuildStatus](https://travis-ci.org/SharonGrossman/constrct.js.svg?branch=master) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Greenkeeper badge](https://badges.greenkeeper.io/SharonGrossman/constrct.js.svg)](https://greenkeeper.io/)
</div>

## Description
A to-be boilerplate application stack <b> constructed </b> with

## Features
* ```Lerna``` package monorepo style
* ```Node.js```
  * API built with:
    * ```Express.js```
    * ```Mongoose```
      * ```mongoose-plugin-seed``` database seeding
    * ```Joi```
  * Auth built with:
    * ```JWT```
    * ```Passport```
  * sockets with ```socket.io``` (wip)
* ```React.js```
  * Layout
    * Home
    * Register
    * Login
    * (Course, Tasks) (wip)
  * Providers (useContext)
    * ThemeProvider (theme toggling & modification)
    * HistoryProvider (navigation with ```history```)
    * NotificationProvider (```material-ui``` notifications)
    * AuthProvider (handling token & user state)
  * Routing
    * abstract layout routing
      * Authenticated routes
      * Unauthenticated routes
    * Redirects
  * ```axios```
    * instanced axios with jwt token updates
  * ```formik``` & ```formik-material-ui```
  * ```styled-components```
  * ```material-ui```
  * ```Webpack``` bundler
  * ```mui-flex-layout``` - Flex layout using ```material-ui``` Box component
* ```Babel```
* Linting with ```ESLint``` & ```prettier```
  * ```eslint-config-sharongrossman``` my customized config for Node & React
* Utilities
  * ```husky```
  * ```lint-staged```
  * ```commitlint```
  * ```semantic-release``` (wip)
  * ```greenkeeper```
  * ```yarn```

## License

[MIT](LICENSE) © [Sharon Grossman](https://github.com/sharongrossman)