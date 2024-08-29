import { useState } from 'react';

const Form = () => {
  const [newItemsName, setNewItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Task bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemsName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          Add task
        </button>
      </div>
    </form>
  );
};

export default Form;
