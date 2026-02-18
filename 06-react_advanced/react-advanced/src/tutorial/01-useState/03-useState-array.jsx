import React from 'react';
import { data } from '../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // console.log(id);
    // Option #1
    // const newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    // Option #2
    setPeople(people.filter((person) => person.id !== id));
    // Option #3
    // setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };
  const removeAllItem = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        // console.log(person);
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        style={{ marginTop: '2rem' }}
        className="btn"
        onClick={removeAllItem}
      >
        Clear items
      </button>
    </div>
  );
};

export default UseStateArray;
