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

## Fist Component in Detail
- Capital letter
- Must return something
- JSX syntax (return HTML)
  - To make our lives easier
  - Calling function under the hood

index.js
```js
cosnt Geeting() => {
  return React.createElement('h2', {}, 'Hello world!');
};
```

```js
function Greeting() {
  return (
    <div>
      <h2>Hello world!</h2>
    </div>
  );
}

const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, 'Hello world!')
  );
};
```

## JSX Rules
- Return single element (one parent element)
  - Semantics section/article
  - Fragment - Let's us group elements without adding extra nodes
  ```js
  return <React.Fragment>...rest of the return</React.Fragment>;

  // Shorthand
  return <>...rest of the return</>;
  ```
- CamelCase property naming convention
```js
return (
  <div tabIndex={1}>
    <button onClick={myFunction}>Click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)

// In HTML
<div tabindex="1">
  <button onclick="myFunction()">Click me</button>
  <label for="name">Name</label>
  <input readonly id="name" />
</div>
```
- className instead of class
```js
return <div className='someValue'>Hello</div>;
```

- Close every element
```js
return <img />;
// Or
return <input />;
```
- Formatting
  - Opening tag in the same line as return or ()
```js
function Greeting() {
  return (
    <>
      <div className='someValue'>
        <h3>Hello people</h3>
        <ul>
          <li>
            <a href='#'>Hello world</a>
          </li>
        </ul>
      </div>
      <h2>Hello world</h2>
      <input type='text' name='' id='' />
    </>
  );
}
```  

## Nest Components
```js
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Adriano Ayala</h2>;
const Message = () => {
  return <p>This is my message</p>;
};
```
