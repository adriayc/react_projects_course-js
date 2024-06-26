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

- setTimeout Example
```js
const handleClick = () => {
  // setTimeout(() => {
  //   console.log('Clicked the button');
  //   setValue(value + 1);
  // }, 3000);
  setTimeout(() => {
    console.log('Clicked the button');
    setValue((currentState) => {
      return currentState + 1;
    });
  }, 3000);
};
```

- As an example refactor code in /tutorial/01-useState/03-useState-array.jsx
- Should we use functional update approach for everything?

## Code Example
```js
import Starter from './tutorial/02-useEffect/starter/01-code-example.jsx';
```

```js
import { useState } from 'react';

const ComponentExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('Hello there');
    // Be careful
    setValue(value + 1);
  };
  sayHello();

  return (
    <div>
      <h1>value: {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click me
      </button>
    <div>
  );
}

export default ComponentExample;
```

- The problem starts when we update the state
```js
const [value, setValue] = useState(0);

const sayHell0 = () => {
  console.log('Hello there');
  // Be careful, you will have infinite loop
  setValue(value + 1);
};
sayHello();
```

- Initial render - setup sate value and invoke sayHello
- In the sayHello update state, trigger re-render
- Re-render - setup state value and invoke sayHello
- In the sayHello update state, trigger re-render
- repeat
- repeat
- repeat .......................
- But what about fetching data?

## useEffect Basics
```js
import Starter from './tutorial/02-useEffect/starter/02-useEffect-basics.jsx';
```

useEffect is a hook in React that allows you to perform side effects in function components. there is no need for urban dictionary - basically any work outside of the component. Some examples of side effects are: subscriptions, fetching data, directly updating the DOM, event listeners, timers, etc.

- useEffect hook
- Accepts two argument (second optional)
- First argument - cb function
- Second argument - dependency array
- By default runs on each render (initial and re-render)
- cb can't return primise (so can't make it async)
- If dependency array empty [] runs only on initial render
```js
import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('Hello there');
  };
  sayHello();

  // useEffect(() => {
  //   console.log('Hello from useEffect');
  // });
  useEffect(() => {
    console.log('Hello from useEffect');
  }, []);

  return (
    <div>
      <h1>value: {value}</value>
      <button type='button' className='btn' onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </div>
  );
};

export default UseEffectBasics;
```

## Multiple Effects
```js
import Starter from './tutorial/02-useEffect/starter/03-multiple-effects.jsx';
```

```js
import { useEffect } from 'react';
import { useState } from 'react';

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log('Hello from first useEffect');
  }, [value]);

  useEffect(() => {
    console.log('Hello from second useEffect');
  }, [secondValue]);

  return (
    <div>
      <h1>value: {value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Value
      </button>

      <h1>Second value: {secondValue}</h1>
      <button
        type="button"
        className="btn"
        onClick={() => setSecondValue(secondValue + 1)}
      >
        Second Value
      </button>
    </div>
  );
};

export default MultipleEffects;
```

## Fetch Data
```js
import Starter from './tutorial/02-useEffect/starter/04-fetch-data.jsx';
```

[Javascript Nuggets - Fetch API](https://www.youtube.com/watch?v=C_VIKzfpRrg&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=18&t=343s)
- Later in the course we will use axios

Setup Challenge:
- Import useSate and useEffect
- Setup state value
  - users - default value []
- Setup useEffect
- MAKE SURE IT RUNS ONLY ON INITIAL RENDER
- In the cb, create a function which performs fetch functionality
  - Use url I provided in the starter file
  - You can use .then or async
  - Set users equal to result
  - Iterate over the list and display image, user name and link
- DON'T WORRY ABOUT CSS, MOST IMPORTAT LOGIC!!!
```js
import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // You can also setup function outsite
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();

        setUsers(users);
      } catch (error) {
        consolo.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h3>Github Users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatart_url, html_url } = use;
          return (
            <li key={id}>
              <img src={avatart_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchData;
```

## Cleanup Function
```js
import Starter from './tutorial/02-useEffect/starter/05-cleanup-function.jsx';
```

Will Cover After 03-conditional-rendering

## Multiple Returns - Basics
```js
import Starter from './tutorial/03-conditional-rendering/starter/01-multiple-returns-basics.jsx';
```

Vanilla JS
```js
const sayHello = (name) => {
  if (name) {
    return `Hello, ${name}`;
    // Exit the function, skip rest of the code
  }
  // So if name provided, won't get to this line
  return 'Hello there';
};

const firstResp = sayHello('John');
console.log('firstResp'); // Hello, John
const secondResp = sayHello();
console.log(secondResp); // Hello, there
```

- If no explicit return by default function returns 'undefined'
```js
import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  // While fetching data
  // Convention with boolean values "isSomething"
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // Done fetching data
      setIsLoading(false);
    }, 3000);
  }, [])

  // Can return entire app
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <h2>My App</h2>;
};

export default MultipleReturnsBasics;
```

## Multiple Returns - Fetch Data
```js
import Starter from './tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data.jsx';
```

Setup Challenge:
- Practice on setting up state values and data fetching
- Create state variable
  - User - default value null
- Fetch data from the url (for no just log result)
- If you see user object in the console, continue with the videos
```js
import { useEffect, useState } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const user = await resp.json();

        console.log(user);
      } catch (error) {
        // Fetch only cares about network errors
        // Will work with axios
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return <h2>Fetch Example</h2>;
};

export default MultipleReturnsFetchData;
```

Data Fetching:
- Usually three options
  - loading - waiting for data to arrive (display loading state)
  - error - there was an error (display error message)
  - success - received data (display data)
```js
import { useEffect, useState } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  // Convertion to setup boolean with isSomething
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useSate(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const user = await resp.json();

        // console.log(user);
        setUser(user);
      } catch (error) {
        isError(true);
        console.log(error);
      }
      // Hide loading
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  // Order matters
  // Don't place user JSX before loading or error
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Thre was an error...</h2>;
  }
  return (
    <div>
      <img
        src={user.avatart_url}
        alt={user.name}
        style={{ width: '150px', borderRadius:  '25px' }}
      />
      <h2>{user.name}</h2>
      <h4>Works at {user.company}</h4>
      <p>{user.bio}
    </div>
  );
};

export default MultipleReturnsFetchData;
```

## Fetch Errors "Gotcha" (optional)
```js
import Starter from './tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data.jsx';
```

Unlike for example Axios, by default, the fetch() API does not consider HTTP status codes in the 4xx or 5xx range to be errors. Instead, it considers these status codes to be indicative of a successful request.
```js
try {
  const resp = await fetch(url);
  // console.log(resp);
  if (!resp.ok) {
    setIsError(true);
    setIsLoading(false);
    return;
  }

  const user = await resp.json();
  setUser(user);
}
```

## Order Matters - Setup
```js
import Starter from './tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data.jsx';
```

Please don't dismiss this topic. A lot of question in course Q&A.

Challenge:
- Destructure properties and remove user form JSX
- You might or might not encounter the bug
```js
return (
  <div>
    <img
      src={avatar_url}
      alt={name}
      style={{ width: '100px', borderRadius: '25px' }}
    />
    <h2>{name}</h2>
    <h4>Works at {company}</h4>
    <p>{bio}</p>
  </div>
);
```

Order Matters - Solution
- Before returns
```js
const [user, setUser] = useState(null);
console.log(user); // Still null
//  We can't pull out properties from null
const { avatar_url, name, company, bio }  = user;
```

- After returns
```js
console.log(user); // User object
const { avatar_url, name, company, bio }  = user;
```

```js
return (
  <div>
    <img
      src={avatar_url}
      alt={name}
      style={{ width: '100px', borderRadius: '25px' }}
    />
    <h2>{name}</h2>
    <h4>Works at {company}</h4>
    <p>{bio}</p>
  </div>
);
```

Vanilla JS
```js
const someObject = {
  name: 'jo koy',
};
// This is cool
someObject.name; // Return 'jo koy'
someObject.propertyThatDoesNotExist; // return undefined

// Not cool at all, javascript will scream, yell and complain
const randomValue = null;
randomValue.name;

// This is ok
const randomList = [];
console.log(removeAllItem[0]); // returns undefined

// Not cool at all, javascript will scream, yell and complain
console.log(randomList[0].name);
```

## Fetch Function Location
```js
cosnt fetchData = async () => {
  // Fetch data
};

useEffect(() => {
  fetchData();
}, []);
```
- DON'T ADD fetchData to dependency array!!!
- IT WILL TRIGGER INFINITE LOOK!!!

## DON'T CALL HOOK CONDITIONALLY
```js
import Starter from './tutorial/03-conditional-rendering/starter/03-hooks-rule.jsx';
```

```js
import { useState, useEffect } from 'react';

const Example = () => {
  const [condition, setCondition] = useState(true);
  if (condition) {
    // Won't work
    const [state, setState] = useState(false);
  }

  if (condition) {
    return <h2>Hello There</h2>;
  }

  // This will also fail
  useEffect(() => {
    console.log('Hello there')
  }, []);

  return <h2>Example</h2>;
};

export default Example;
```

## Truthy and Falsy Values (optional)
Vanilla JS

In JavaScript, a value is considered "truthy" if it is evaluated to true when used in a boolean context. A value is considered "falsy" if it is evaluated to false when used in a boolean context.

Here is a list of values that are considered falsy in JavaScript:

false, 0 (zero), "" (empthy string), null, undefined, NaN (Not a Number). All other values, including objects and arrays, are considered truthy.

For example:
```js
const x = 'Hello';
const y = '';
const z = 0;

if (x) {
  console.log('x is truthy');
}

if (y) {
  console.log('y is truthy');
} else {
  console.log('y is falsy');
}

if (z) {
  console.log('z is truthy');
} else {
  console.log('z is falsy');
}

// Output:
// "x is truthy"
// "y is falsy"
// "z is falsy"
```

In this example, the variable x is a no-empty string, which is considered truthy, so the first if statement is executed. The variable y is an empty string, which is considered falsy, so the else block of the second if statement is executed. The variable z is the number 0, which is considered falsy, so the else block of the third is statement is executed.

## Short Circuit Evaluation (optional)

Vanilla JS

In JavaScript, short-circuit evaluation is a technique that allows you to use logical operators (such as && and ||) to perform conditional evaluation is a concise way.

The && operator (logical AND) return the first operand if it is "falsy", or the second operand if the fist operand is "truthy".

For example:
```js
const x = 0;
const y = 1;

console.log(x && y); // Output: 0 (the first operand is falsy, so it is returned)
console.log(y && x); // Output: 0 (the second operand is falsy, so it is returned)
```

The || operator (logical OR) returns the first operand if it is "truthy", or the second operand if the first operand is "falsy".
```js
const x = 0;
const y = 0;

console.log(x || y); // Output: 1 (the first operand is falsy, so the second operand is returned)
console.log(y || y); // Output: 1 (the first operand is truthy, so it is returned)
```

Short-circuit evaluation can be useful in cases where you want to perform a certain action only if a certain condition is met, or you want to return a default value if a certain condition is not met.

For example:
```js
function displayName(name) {
  return name || 'Anonymous';
}

console.log(displayName('Pizza')); // Output: "Pizza"
console.log(displayName()); // Output: "Anonymous"
```

In this example, the displayName() function returns the name property of the user object if it exists, or "Anonymous" if the name property is not present. This is done using the || operator and short-circuit evaluation.

## Short Circuit Evaluation React - Basics
```js
import Starter from './tutorial/03-conditional-rendering/starter/04-short-circuit-overview.jsx';
```

Setup Challenge:
- Create two state values
- One "falsy" and second "truthy"
- Setup both conditions for each operator is JSX - hint {}
  - || OR
  - && AND
```js
import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('Susan');

  cosnt codeExample = text || 'Hello world';

  // Can't use if statements
  return (
    <div>
      {/* {if (someCondition) {"Won't work"}} */}

      <h4>Falsy OR: {text || 'Hello wold'}</h4>
      <h4>Falsy AND: {text && 'Hello wold'}</h4>
      <h4>Truthy OR: {name || 'Hello wold'}</h4>
      <h4>Truthy AND: {name && 'Hello wold'}</h4>
      {codeExample}
    </div>
  );
};

export default ShortCircuitOverview;
```
