import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import customFetch from './utils';

const Form = () => {
  const [newItemsName, setNewItemName] = useState('');

  // const result = useMutation({
  const { mutate: createTask, isPending } = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
  });
  // console.log(result);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemsName);
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
        <button type="submit" className="btn" disabled={isPending}>
          Add task
        </button>
      </div>
    </form>
  );
};

export default Form;
