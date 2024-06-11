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

## React Developer Tools
- Top right corner
- More tools/Extensions
- Open chrome web store

## Book List
- Setup structure
```js
import React from 'react';
import ReactDOM from 'react-dom/client';

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <h2>Image placeholder</h2>;
const Title = () => {
  return <h2>Book Title</h2>;
};
const Author = () => <h4><Author</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
```

- In search engine type - 'amazon best selling books' [Amazon Best Sellers](https://www.amazon.com/Best-Sellers-Books/zgbs/books/)
- DON'T NEED TO BUY ANITHING!!!
- NOT AN AFFILIATE LINK!!!
- Choose a book
- Copy image, title and author

```js
import React from 'react';
import ReactDOM from 'react-dom/client';

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/41kw-B7x7EL._SY445_SX342_.jpg"
    alt="Dad, I Want to Hear Your Story"
  />
);
const Title = () => <h2>Dad, I Want to Hear Your Story</h2>;
const Author = () => {
  return <h4>Jeffrey Mason</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
```

## CSS
- Create index.css in src
```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;;
}

body {
  color: #222;
  background: #f1f5f8;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
```

- Import file and add classes
```js
import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
```

- Complete css
```css
.booklist {
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
}

@media screen and (min-width: 769px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
  }
}

.book {
  background: #fff;
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
}
.book img {
  width: 100%;
  object-fit: cover;
}
.book h2 {
  font-size: 1rem;
  margin-top: 1rem;
}
```

## Local Images (Public Folder)
- Optional Video!!!

- External images (hosted on different server) - Just need an url
- Local images (public folder) - Less performance
- Local images (src folder) - Better solution for assets, since under the hook they get optimized

- Save image (Save Image As...)
- Create images folder in public
- Copy/paste image
- Rename (optional)
- Replace url in the src - './images/imageName.extension'
- './' because assets are on the same server

```js
const Image = () => (
  <img src='./images/book-1.jpg' alt='Interenting Facts For Curious Minds' />
);
```

- Whatever assets we place in public - Instantly available
- Domain(localhost)/asset  

## JSX - CSS (inline styles)
- Style prop
- {} in JSX mean going back to JS Land
- Value is an object with key/valu paris - Capitalized and with ''
```js
const Author = () => (
  <h4 style={{ color: '#617d98', fontSize='0.75', marginTop: '0.5rem' }}>Jeffrey Mason</h4>
);
```

- css rules still apply (inline vs external css)

```css
.book h4 {
  /* Won't work */
  color: red;
  /* Will work */
  letter-spacing: 2px;
}
```

- External libraries use inline css, so if you want to make some changes, reference the library docs and elements tab
- Alternative option
```js
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };

  return <h4 style={inlineHeadingStyles}>Jeffrey Mason</h4>;
};
```

- FOR THE MOST PART, MULTIPLE APPROACHES AVAILABLE!!!
- AS LONG AS THE RESULT IS THE SAME, REALLY COMES DOWN TO PREFERENCE!!!

## JSX - JavaScript
- Refactor to single book component (personal preference)
- Remove inline css
```js
const Book = () => {
  <article className='book'>
    <img src="./images/book-1.jpg" alt="Dad, I Want to Hear Your Story"/>
    <h2>Dad, I Want to Hear Your Story</h2>
    <h4>Jeffrey Mason</h4>
  </article>
};
```

```css
.book h4 {
  color: #617d98;
  font-size: 0.75rem;
  letter-spacing: 0.5rem;
  margin-top: 2px;
}
```

- {} in JSX means going back to JS Land
- Value inside must be an expression (return value), can't be a statement
```js
const author = 'Jeffrey Mason';

const Book = () => {
  const title = 'Dad, I Want to Hear Your Story';

  return (
    <article className='book'>
      <img src="./images/book-1.jpg" alt="Dad, I Want to Hear Your Story"/>
      <h2>{title}</h2>

      <h4>{author.toUppercase()}</h4>
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  );
};
```

- Toggle line comment Edit/Toggle Line Comment

## Props - Initial Setup
```js
const author = 'Jeffrey Mason';
const title = 'Dad, I Want to Hear Your Story';
const img = './images/book-1.jpg';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
```

```js
// Parameters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};

// Argunments
someFunc('job', 'developer');
```

```js
const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {console.log(props)}
    </article>
  );
};
```

- props object, convention to call props, 'shakeAndBake' is an excellent alternative
- Pass as key/value pairs
- If the props exists it will return value, otherwise no value

```js
function BookList() {
  return (
    <section>
      <Book job='developer' />
      <Book title='random title' number={22} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};
```

```js
function BookList() {
  return (
    <section className='booklist'>
      <Book author={author} title={title} img={img} />
      <Book title={title} img={img} />
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  );
};
```
