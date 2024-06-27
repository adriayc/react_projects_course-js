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
    const someFunc = () => {
      // Some logic
    };
    window.addEventListener('scroll', someFunc);

    return () => window.removeEventListener('scroll', someFunc);
  }, []);

  return <h1>Hello there</h1>;
};

export default CleanupFunction;
