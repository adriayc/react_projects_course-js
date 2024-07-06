import { useState } from 'react';
import { data } from '../../../data';
import List from './List';

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removePerson = (id) => {
    const newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };

  return (
    <section>
      <button
        type="button"
        className="btn"
        style={{ marginBottom: '1rem' }}
        onClick={() => setCount(count + 1)}
      >
        Count {count}
      </button>

      <List people={people} removePerson={removePerson} />
    </section>
  );
};

export default LowerState;
