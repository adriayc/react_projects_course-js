import { useState } from 'react';
import { data } from '../../data';

const ReducerBasics = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearList = () => {
    setPeople([]);
  };

  const resetList = () => {
    setPeople(data);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}

      {people.length < 1 ? (
        <button
          type="button"
          className="btn"
          onClick={resetList}
          style={{ marginTop: '2rem' }}
        >
          Reset
        </button>
      ) : (
        <button
          type="button"
          className="btn"
          onClick={clearList}
          style={{ marginTop: '2rem' }}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
