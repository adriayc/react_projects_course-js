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

## useState with Array
```js
import Starter from './tutorial/01-useState/starter/03-useState-array.jsx';
```

Setup Challenge:
- Import data
- Setup a state value
  - People - default value equal to data
- Display list (people) in the browser
- Create two functions
  - One that removes single item from the list
  - On that clears entire list

1. Render the list
```js
import React from 'react';
import { data } from '../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  return (
    <div>
      {people.map((person) => {
        // console.log(person);
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default UseStateArray;
```

2. Remove items
[Javascript Nuggets - Filter and Find](https://www.youtube.com/watch?v=KeYxsev737s&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=4)
```js
import React from 'react';
import { data } from '../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const removeAllItem = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        style={{ marginTop: '2rem' }}
        className="btn"
        onClick={removeAllItem}
      >
        Clear items
      </button>
    </div>
  );
};

export default UseStateArray;
```

- Should we updated backroads app project?

## useState with Object
```js
import Starter from './tutorial/01-useState/starter/04-useState-object.jsx';
```

Setup Challenge
- Setup three state values
  - name (string)
  - age (number)
  - hobby (string)
- render in the browser
- Create a button
  - Setup a function
    - Update all three state values
- As a result once the user clicks the button , new person in displayed in the browser
```js
import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('Peter');
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState('Read books');

  const displayPerson = () => {
    setPerson({
      name: 'John',
      age: 28,
      hobby: 'Screen at the computer'
    });
    // setName('John');
    // setAge(28);
    // setHobby('Scream at the computer');
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys To: {hobby}</h3>
      <button type="button" className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
```

## Automatic Batching
In React, "batching" refers to the process of grouping multiple state updates into a single update. This can be useful in certain cases because it allows React to optimize the rendering of your components by minimizing the number of DOM updates that it has to perform.

By default, react uses a technique called "auto-batching" to group state updates that occur within the same event loop into a single update.
This means that if you call the state update function multiple times in a short period of time, React will only perform a single re-render for all of the updates.

React 18 ensures that state updates invoked from any location will be batched by default. This will batch state updates, including native event handlers, asynchronous operations, timeouts, and intervals.

## Switch to Object
```js
import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'Read books',
  });

  const displayPerson = () => {
    setPerson({
      name: 'John',
      age: 28,
      hobby: 'Screen at the computer',
    });
    // Be careful, don't overwrite
    // setPerson('ShakeAndBake');
    // setPerson({ name: 'Susan' });
    // setPerson({ ...person, name: 'Susan' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys To: {person.hobby}</h3>
      <button type="button" className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
```

## Setup Challenge
- Setup a state value and the button
- Add functionality to increase value by 1
- log a state value, right after setFunction

Keep in mind that the state update function setState does not immediately mutate the state. Instead, it schedules an update to the state and tells React that it needs to re-render the component. The actual state update will be performed as part of the next rendering cycle. Be mindful when you need to set state value based on a different state value.

Trivial example
```js
import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
    // Be carefull it's the old value
    console.log(value);
    // So if you have any functionality
    // that relies on the latest value
    // it will the wrong!!!
  };

  return (
    <div>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
```

If you want to update the state immediately and synchronously, you can pass a function to setState that receives the previous state as an argument and returns the new state. For example:
```js
serState((prevState) => {
  return { ...prevState, value: newValue }
})
```

This can be useful if you need to update the state based on the previous state, or if you need to update the state synchronously.
```js
cont handleClick = () => {
  setValue((currentState) => {
    // Must return otherwise undefined
    // below is the latest/current state value
    const newState = currentState + 1;
    return newState;
  })
};
```
