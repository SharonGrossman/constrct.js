<div align="center">
<h1>
constrct.js 

:construction:
</h1>

![BuildStatus](https://travis-ci.org/SharonGrossman/constrct.js.svg?branch=master) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Greenkeeper badge](https://badges.greenkeeper.io/SharonGrossman/constrct.js.svg)](https://greenkeeper.io/) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

</div>

## Description
A boilerplate application stack <b> constructed </b> with

## Features
* ```Lerna``` package monorepo style
* ```Node.js```
  * API built with:
    * ```Express.js```
    * ```Mongoose```
      * ```mongoose-dependent-seed``` database seeding
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
    * Course (a sample model)
  * Providers (useContext)
    * ThemeProvider (theme toggling & modification)
    * HistoryProvider (navigation with ```history```)
    * NotificationProvider (```material-ui``` notifications)
    * LoadingProvider (a progress bar used when fetching data)
    * AuthProvider (handling token & user state)
    * AxiosProvider (provides axios methods, seperated by different axios instances for auth & api)
  * Routing
    * abstract layout routing
      * ResolvedRoute (allows routes or redirects by the current user auth state)
  * ```axios```
    * instanced axios with jwt token updates
  * ```formik``` & ```formik-material-ui```
  * ```yup``` form validations
  * ```styled-components```
  * ```material-ui```
  * ```Webpack``` bundler
  * ```mui-flex-layout``` - Flex layout using ```material-ui``` Box component
* ```Babel```
* Linting with ```ESLint``` & ```prettier``` & ```stylelint```
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