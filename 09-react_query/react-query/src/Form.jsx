import { useState } from 'react';
import { useCreateTask } from './reactQueryCustomHooks';

const Form = () => {
  const [newItemsName, setNewItemName] = useState('');

  const { createTask, createTaskPending } = useCreateTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemsName, {
      onSuccess: () => {
        setNewItemName('');
      },
    });
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
        <button type="submit" className="btn" disabled={createTaskPending}>
          Add task
        </button>
      </div>
    </form>
  );
};

export default Form;
