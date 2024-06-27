import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('Render');

  return (
    <div>
      <button type="button" className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    // console.log('Hmm, this is interesting');
    const intId = setInterval(() => {
      console.log('Hello from interval');
    }, 1000);

    return () => {
      clearInterval(intId);
      console.log('Cleanup');
    };
  }, []);

  return <h1>Hello there</h1>;
};

export default CleanupFunction;
