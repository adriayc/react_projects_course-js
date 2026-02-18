import { useEffect } from 'react';

const Person = ({ name }) => {
  console.log('Render');

  useEffect(() => {
    console.log('Unfortunately does not fix the issue');
  }, []);

  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};

export default Person;
