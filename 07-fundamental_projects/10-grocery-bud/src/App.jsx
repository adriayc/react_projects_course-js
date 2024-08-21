import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      // id: Date.now(),
      id: nanoid(),
    };

    setItems([...items, newItem]);
  };

  const removeItem = (itemId) => {
    // console.log(itemId);

    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};

export default App;
