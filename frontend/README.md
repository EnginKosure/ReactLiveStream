# Aplaudo Project - HYF Bootcamp

<h3 align="center">Hi 👋, We are Aplaudo Team</h3>
`Demanded by passionate artists, made by professional-souled amateurs...`

## Table of contents

- General Information
- Used Technologies and Libraries
- Overall Architecture
- Structure of the Project
- Get Started
- Demo of the Project
- Project Status
- TODOs
- Links to Other Repositories
- Contact
- Generic CRA Documentation

## General Information

It is designed to be a platform dedicated for artists to have an account and create/arrange concert streaming.

- Artist can create profile, add/schedule events
- Live video environment with 1-to-many connection
  (owner has camera and microphone access, audience doesn't)

## Used Technologies and Libraries:

- Create-React-App
- axios, http-proxy-middleware
- bootstrap, react-bootstrap, node-sass, styled-components
- react-hook-form, react-bootstrap-country-select, react-elastic-carousel
- react-multi-select-component
- redux, react-redux, redux-logger, redux-thunk

## Structure of the Project

```
|backend
|-public
|--script.js
|-views
|--room.ejs
|-.gitignore
|-package.json
|-server.js
|-TODO.md
|frontend
|-public
|-src
|--actions
|--assets
|--components
|--constants
|--containers
|----About
|----Carousel
|------ConcertInfo
|------Item
|----Concert
|----Footer
|----Navbar
|----VideoEnvironment
|------ConcertVideo
|------ConcertVideoList
|----profile
|----register
|--context
|--helpers
|--reducers
|--services
|--App.js
|--App.scss
|--App.test.js
|--index.js
|--setupProxy.js
|--setupTests.js
|-.gitignore
|-package.json
|-README.md
```

## Get Started

## Demo of the Project

<img src="./src/assets/aplaudo.gif" alt="My Project GIF" width="500" height="600">

- [Link to project](https://aplaudo.herokuapp.com/signin)

## TODOs:

- `styling`: Remove the duplicate styles and apply the styled-components overall.

- `backend connection`: Fully integrate the auth process.

- `add search and filter functionality`

- `add redux overall`: Redux is applied for only user registration operations. Can be applied also to concert operations.

- `add dark mode`

## Contact & Contributors

- [Sait Tosun](https://github.com/saittosun)

- [Engin Kosure](https://github.com/EnginKosure)

- [Rasha Ali](https://github.com/Rashaali84)

- [Rahal Semu](https://github.com/Rahela-HYF)

- [Wouter Wouters](https://github.com/WouterWouters)

## Generic CRA Documentation - Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
