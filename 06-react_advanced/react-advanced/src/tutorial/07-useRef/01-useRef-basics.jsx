import {
  // useEffect,
  useRef,
} from 'react';
import { useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);

  // console.log(refContainer);

  // useEffect(() => {
  //   console.log(refContainer);
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            ref={refContainer}
          />
        </div>
        <button type="submit" className="btn btn-blok">
          Submit
        </button>
      </form>

      <h1>Value: {value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </div>
  );
};

export default UseRefBasics;
