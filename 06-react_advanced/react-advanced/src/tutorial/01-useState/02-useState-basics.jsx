import { useState } from 'react';
// import React, { useState } from 'react';

const UseStateBasics = () => {
  //   console.log(useState(1));
  //   const value = useState('Hello')[0];
  //   const func = useState('Hello')[1];
  //   console.log(value);
  //   console.log(func);

  const [count, setCount] = useState(0);
  //   const [name, setName] = React.useState();

  const handleClick = () => {
    setCount(count + 1);
    // console.log(count);
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
