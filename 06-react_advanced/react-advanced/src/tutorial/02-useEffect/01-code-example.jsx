import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('Hello there');
    // Be careful, you will have infinite loop
    setValue(value + 1);
  };
  sayHello();

  return (
    <div>
      <h1>value: {value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </div>
  );
};

export default CodeExample;
