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

## Extensions and Settings
- Auto Rename Tag
- Highlinght Matching Tag
  - Customize in settings.json
- Pettier
  - Format on save
  - Formate on paste
  - Default Formatter (Prettier - Code formatter)

settings.json
```json
"editor.formatOnPaste": true,
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"prettier.singleQuote": true,
"prettier.semi": false,
```

- Emmet
settings.json
```json
"emmet.includeLanguages": {
  "javascript": "javascriptreact"
}
```

- ES7 Snippets (ES7+ React/Redux/React-Native snippets - dsznajder)
  - rafce (Arrow func with export)
  - rfce (Regular func with export)
    - Same as the file name
  - React auto import
    - uncheck
    - React Snippets > Settings: Import React On Top
