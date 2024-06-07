# React Fundamentals

## Folder Structure
- node_modules: Contains all dependencies required by the app. Main dependencies also listed in package.json
- public: Contains static assets including index.html (page template).
  - index.html
    - title
    - fonts
    - CSS
    - favicon
    - id="root" - Our entire app
- src: In simplest form it's the brain of our app. This is where we will do all of our work. src/index.js is the JavaScript entry point.
- .gitignore: Specifies which files source control (Git) should ignore.
- package.json: Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts.
- package-lock-json: A snapshot of the entire dependency tree.
- README: The markdown file where you can share more info about the project for example build instructions and summary.
- zoom: 175%

## Remove Boilerplate
- Remove src folder
- Create src folder
  - Create index.js inside src
- Toggle sidebar CTRL + B (VSCode)
- Shortcuts settings/keyboard shortcuts (VSCode settings icon -> Keyboard Shurtcuts CTRL + K CTRL + S)

## Fist Component
```js
function Greeting() {
  return <h2>My First Component</h2>;
}

// Arrow function also works
const Greeting = () => {
  return <h2>My First Component</h2>;
};
```
- Starts with capital letter
- Must return JSX (html)
- Always close tag <Greeting />

### Typical Component
```js
// Imports or logic

const Greeting = () => {
  return <h2>My First Component</h2>;
};

export default Greeting;
```

### Root Coponent (only one)
index.js
```js
import React from 'react';
import ReactDOM form 'react-dom/client';

function Greeting() {
  return <h2>My First Component</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
```

### Possible Bug
If for some reason you still have this error in the terminal
```
Module not found: Error: Can't resolve 'path/index.js'
```

Just restart the server
- CTRL + C (stop the server)
- "npm start" (start the dev server)
