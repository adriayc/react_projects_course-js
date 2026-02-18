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
