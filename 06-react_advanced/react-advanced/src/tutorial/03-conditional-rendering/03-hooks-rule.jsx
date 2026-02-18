import { useState, useEffect } from 'react';

const Example = () => {
  const [condition, setCondition] = useState(true);
  //   if (condition) {
  //     // Won't work
  //     const [state, setState] = useState(false);
  //   }

  if (condition) {
    return <h2>Hello There</h2>;
  }

  // This will also fail
  useEffect(() => {
    console.log('Hello There');
  }, []);

  return <h2>Example</h2>;
};

export default Example;
