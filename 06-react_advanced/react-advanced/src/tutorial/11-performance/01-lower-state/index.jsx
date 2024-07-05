import { useState } from 'react';
import { data } from '../../../data';
import List from './List';

const LowerState = () => {
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(data);

  return (
    <section>
      <button
        type="button"
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        Count {count}
      </button>

      <List people={people} />
    </section>
  );
};
export default LowerState;
