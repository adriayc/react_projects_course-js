# Backroads App

## Working Application - Deployed
- backroads-html - working html/css/javascript project (contains assets)
- final (complete source code) - working react application
  - Navigate to the folder
  - Run 'npm install'
  - Once the dependencies are intalled run 'npm start'

## Create New React App
- Install
```bash
$ npx create-react-app@latest backroads-app
```
- Run dev server
```bash
$ npm start
```

## SRC Folder (boilerplate)
- index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles (typically global)
import './index.css';

// Convention to name it App and setup in a separate file
import App from './App';
// Import report web vitals
import reportWebVitals from './reportWebVitals';

// StrictMode
// StrictMode is a tool for highlighting potential problems in an application. Activates additional checks and warning for its descendants. Runs only in Development, does not impact the production build. RENDERS TWICE!!! Possible to remove.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

- Remove in src
  - setupTests.js
  - reportWebVitals.js
  - App.test.js
- Be careful with multiple css files

App.js
```js
function App() {
  return <h1>Backroads App</h1>;
}
```

- Remove
  - Remove logo.svg
  - App.css
