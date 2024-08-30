import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import customFetch from './utils';

const Form = () => {
  const [newItemsName, setNewItemName] = useState('');

  const queryClient = useQueryClient();

  // const result = useMutation({
  const { mutate: createTask, isPending } = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
    onSuccess: () => {
      // Refetch
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      // Alert success
      toast.success('Task added');
      // Set default value
      setNewItemName('');
    },
    onError: (error) => {
      // console.log(error);
      // Alert error
      toast.error(error.response.data.msg);
    },
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
