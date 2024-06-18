# React - Advanced Concepts

## Run App
```bash
$ npm install && npm run dev
```

## Setup
- Traditional Vite App
  - Removed boilerplate
  - Provided some assets (css, data)
    - Just so we can focus on important stuff
  - Removed, so it's less logs

## Advanced Topics
- /tutorial directory
- Work in the start folder
- Complete code in the final folder
- In order to work on topic import component from 'starter'
- In order to test final import component from 'final'
- Setup challenges
- In the beginning examples with numbers and buttons
```js
import Starter from './tutorial/1-useState/starter/1-error-example';
import Final from './tutorial/1-useState/final/1-error-example';

function App() {
  return (
    <div className='container'>
      <Starter />
      <Final />
    </div>
  );
}

export default App;
```

## The Need For State
```js
import Starter from './tutorial/01-useState/starter/01-error-example.jsx';
```

- In App.jsx setup import and container div
  Setup challenge:
- Create count variable
- Display value in the JSX
- Add button increase the value
- The reason for bug - we don't trigger re-render (reference next lecture)
```js
const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
    // Preserve value between renders
    // Trigger re-render
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Increment
      </button>
    </div>
  );
};

export default ErrorExample;
```

## useState Basics
```js
import Starter from './tutorial/01-useState/starter/02-useState-basics.jsx';
```

[Javascript Nuggets - Destructuring (Array)](https://www.youtube.com/watch?v=qhECs40xMec&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=7&t=9s)
- useState hook
- Return an array with two elements: the current state value, and a function that we can use to update the state
- Accepts default value as an argument
- State update triggers re-render
```js
import { useState } from 'react';

const UseStateBasics = () => {
  //   console.log(useState(1));
  //   const value = useState('Hello')[0];
  //   const func = useState('Hello')[1];
  //   console.log(value);
  //   console.log(func);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    // Be careful, we can set any value
    // setCount('pants');
  };

  return (
    <div>
      <h4>you clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
```

## Initial Render and Re-Renders
In a React application, the initial render is the first time that the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. This is also known as "mounting" the components.

Re-renders, on the other hand, happen when the component's state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.

There are a few ways that you can trigger a re-render in a react component:
- By changing the component's state or props. When the component's state or props change, React will re-render the component to reflect these changes.
- When the parent element re-renders, even if the component's state or props have not changed.

## General Rules of Hooks
- Start with "use" (both - react and custom hooks)
- Component must be uppercase
- Invoke inside function/component body
- Don't call hooks conditionally (cover later)
- Set functions don't update state immediately (cover later)
