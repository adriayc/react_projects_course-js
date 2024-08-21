import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';

// Add items LS
const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

// Get items LS
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  // console.log(list);

  if (list) {
    // list = JSON.parse(localStorage.getItem('list'));
    list = JSON.parse(list);
  } else {
    list = [];
  }
  return list;
};

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
  getLocalStorage();
  // const [items, setItems] = useState([]);
  // const [items, setItems] = useState(getLocalStorage());
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      // id: Date.now(),
      id: nanoid(),
    };

    // setItems([...items, newItem]);
    const newItems = [...items, newItem];
    setItems(newItems);
    // Add item LS
    setLocalStorage(newItems);
  };

  const removeItem = (itemId) => {
    // console.log(itemId);

    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    // Remove items LS
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};

export default App;
