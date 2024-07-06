import { useCallback, useState } from 'react';
import { data } from '../../../data';
import List from './List';

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removePerson = useCallback(
    (id) => {
      console.log(people);
      const newPerson = people.filter((person) => person.id !== id);
      setPeople(newPerson);
    },
    [people]
  );

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
