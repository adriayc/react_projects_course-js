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

## Props - Somewhat Dynamic Setup
- Setup an object
- Refactor vars to properties
- Copy/paste and rename
- Get values for second book
- Setup props

```js
const firstBook = {
  author: 'Jeffrey Mason',
  title: 'Dad, I Want to Hear Your Story',
  img: './images/book-1.jpg',
};
const secondBook = {
  author: 'Michael Crichton, James Patterson',
  title: 'Eruption',
  img: 'https://m.media-amazon.com/images/I/81SIQfF-aGL._SL1500_.jpg',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
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

## Access Props - Multiple Approaches
- There is no right or wrong - again preference!!!
- destructuring (object) [JS Nuggets - Destructuring (object)](https://www.youtube.com/watch?v=i4vhNKihfto&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=9&t=1s)
- Destructuring in Vanilla JS
- Saves time/typing
- Pull out the properties
- Don't need to reference object anymore
```js
const someObject = {
  name: 'John',
  job: 'Developer',
  location: 'Florida',
};

console.log(someObject.name);
const { name, job } = someObject;
console.log(job);
```

- No need for all the props.propName
- Destructure inside component
```js
const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

- Destructure in function parameters (in our case props)
- If you have console.log(props) - it won't be defined
```js
const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
};
```


## Children Prop
- Everything we render between component tags
- During the course we will mostly use it Context API
- Special prop, has to be "children"
- Can place anywhere in JSX
```js
function BookList = () => {
  return (
    <section class='booklist'>
      <Book
        author={firstBook.author}
        tilte={firstBook.title}
        img={firstBook.img}
      >
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.</p>
        <button>Click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = ({ img, title, author, children }) => {
  // Rest of the logic
};
const Book = (props) => {
  console.log(props);
  const { img, title, author, children } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
}
```

- Optional
```css
@media screen and (min-width: 768px) {
  .booklist {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
}
.book p {
  margin: 1rem 0 0.5rem;
}
```

## Simple List
- [Javascript Nuggets - Map](https://www.youtube.com/watch?v=80KX6aD9R7M&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=1)
- Refactor
```js
const books = [
  {
    author: 'Jeffrey Mason',
    title: 'Dad, I Want to Hear Your Story',
    img: './images/book-1.jpg',
  }, {
    author: 'Michael Crichton, James Patterson',
    title: 'Eruption',
    img: 'https://m.media-amazon.com/images/I/81SIQfF-aGL._SL1500_.jpg',
  }
];

function BookList() {
  return <section className='booklist'></section>
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

- Can't render objects in React
```js
function BookList() {
  return <section className='booklist'>{books}</section>
}
```

- map - creates a new array from calling a function for every array element
```js
const names = ['John', 'Peter', 'Susan'];
const newNames = names.map((name) => {
  console.log(name);
  return <h1>{name}</h1>;
});

function BookList() {
  return <section className='booklist'>{newNames}</section>;
}
```

## Proper List
- Remove names and newNames
```js
function BookList() {
  return (
    <section className='booklist'>
    {books.map((book) => {
      console.log(book);

      // return 'Hello';
      return (
        <div>
          <h2>{book.title}</h2>
        </div>
      );
    })}
    </section>
  );
}
```

- Render component
- Pass properties one by one
```js
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book);
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />
      })}
    </section>
  );
}
```

## Key Prop
- Typically it's going to be id
```js
const books = [
  {
    author: 'Jeffrey Mason',
    title: 'Dad, I Want to Hear Your Story',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'Michael Crichton, James Patterson',
    title: 'Eruption',
    img: 'https://m.media-amazon.com/images/I/81SIQfF-aGL._SL1500_.jpg',
    id: 2,
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book);
        const { img, title, author, id } = book;
        return <Book book={book} key={id} />;
      })}
    </section>
  );
}
```

- You will seed index, but it's not advised if the list is changing
```js
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        console.log(book);
        const { img, title, author, id } = book;
        return <Book book={book} key={index} />
      })}
    </section>
  );
}
```

## Pass The Entire Object
- Render component
- Pass entire object
- Destructuring (object) [JS Nuggets - Destructuring (object)](https://www.youtube.com/watch?v=i4vhNKihfto&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=8&t=1s)
```js
function BookList() {
  <section className='booklist'>
    {books.map((book) => {
      console.log(book);
      const { img, title, author } = book;
      return <Book book={book} />;
    })}
  </section>
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

- Alternative
```js
const Book = ({ book: { img, title, author } }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

### My Personal Preference
- Utilize spread operator (...) - copy values
- Spread Operator
- [JS Nugget - Spread Operator](https://www.youtube.com/watch?v=4Zyr5a3m0Fc&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=10)
```js
const friends = ['John', 'Peter', 'Anna'];
const newFriends = [...friends, 'Susan'];
console.log(friends);
console.log(newFriends);

const someObject = {
  name: 'John',
  job: 'Developer',
};
// Copy not a reference!!!
const newObject = { ...someObject, location: 'Florida' };
console.log(someObject);
console.log(newObject);
```

```js
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
const Book = ({ img, title, author }) => {
  // Rest of the code
};
```

## Events - Fundamentals
- Vanilla JS
```js
const btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {
  // Access event object
  // Do something when event fires
});
```

- Similar approach
- Element, event, function
- Again camelCase
```js
const EventExample = () => {
  const handleButtonClick = () => {
    alert('Handle button click');
  };
  return (
    <section>
      <button onClick={handleButtonClick}>Click me</button>
    </section>
  );
};
```

- [React Events](https://legacy.reactjs.org/docs/events.html)
- No need to memorize them (idea is the same)
- Most common
  - onClick (click events)
  - onSubmit (submit form)
  - onChange (input change)
```js
function BookList() {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const EventExample = () => {
  const handleFormInput = () => {
    console.log('Handle form input');
  };
  const handleButtonClick = () => {
    alert('Handle button click');
  };

  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>Click me</button>
    </section>
  );
};
```

## Events Object and Form Submission
```js
const EventsExample = () => {
  const handleFormInput = (e) => {
    console.log(e);
    // e.target -element
    console.log(`Input Name: ${e.target.name}`);
    console.log(`Input Value: ${e.target.value}`);
    //  console.log('Handle form input');
  };
  const handleButtonClick = () => {
    alert('Handle button click');
  };
  const handleFormSubmission = (e) => {
    e.prenventDefault();
    console.log('Form submitted');
  };
  return (
    <section>
      {/* Add onSubmit Event Handler */}
      <form>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/* Add button with type='submit' */}
        <button type='submit'>Submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```

- Alternative approach
```js
<button type='submit' onClick={handleFormSubmission}>
  Submit form
</button>
```

## Mind Grenade
- Alternative approach
- Pass anonymous function (in this case arrow function)
- One linear - less code
```js
const EventExample = () => {
  return (
    <section>
      <button onClick={() => console.log('Hello there')}>Click me</button>
    </section>
  );
};
```

- Also can access event object
```js
const EventExample = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={() => console.log('You Clicked me')}>Click me</button>
    </section>
  );
};
```

## Mind Grenade #2
- Remove EventsExample
- Components are independent by default
```js
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  const displayTitle = () => {
    console.log(title);
  };

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>Display title</button>
      <h4>{author}</h4>
    </article>
  );
};
```

- Remove button

## Prop Drilling
- React data flow - can only pass props down
- Alternatives Content API, redux, other state libraries
```js
function BookList() {
  const someValue = 'shakeAndBake';
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, displayValue } = props;

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>click me</button>
      <h4>{author} </h4>
    </article>
  );
};
```

## More Complex Example
- Initial setup
- Create getBook function in booklist
- Accepts id as an argument and finds the book
- [JavaScript Nuggets - Filter and Find](https://www.youtube.com/watch?v=KeYxsev737s&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=4)
- Pass the function down to Book Component and invoke  on the button click
- In the Book Component destructure id and function
- Invoke the function when user clicks the button, pass the id
- The goal: you should see the same book in the console
```js
const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook=(getBook) />
      })}
    </section>
  );
};

const Book = (props) => {
  // console.log(props);
  const { img, title, author, id, getBook } = props;

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* This is not going to work */}
      <button onClick={getBook(id)}>Display title</button>
      <h4>{author}</h4>
    </article>
  );
};
```

- Two fixes
- First option - setup wrapper
```js
const Book = (props) => {
  // console.log(props);
  const { img, title, author, id, getBook }  = props;
  const geSingleBook = () => {
    getBook(id);
  };
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>Display title</button>
      <h4>{author}</h4>
    </article>
  );
};
```

- Two fixes
- Second option - wrap in the anonymous arrow function
```js
const Book = (props) => {
  // console.log(props);
  const { img, title, author, id, getBook }  = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <button onClick={() => getBook(id)}>Display title</button>
      <h4>{author}</h4>
    </article>
  );
};
```
