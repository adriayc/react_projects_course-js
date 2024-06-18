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
