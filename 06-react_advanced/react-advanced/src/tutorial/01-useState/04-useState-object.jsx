import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('Peter');
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState('Read books');

  const displayPerson = () => {
    setName('John');
    setAge(28);
    setHobby('Scream at the computer');
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
