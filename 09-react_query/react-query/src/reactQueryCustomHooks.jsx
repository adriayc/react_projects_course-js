import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import customFetch from './utils';

// Get all tasks
export const useFetchTasks = () => {
  const { isPending, data, error, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/');
      return data;
    },
  });

  return { isPending, isError, data };
};

// Create task
export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: createTask, isPending: createTaskPending } = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Task added');
    },
    onError: (error) => {
      // console.log(error);
      toast.error(error.response.data.msg);
    },
  });

  return { createTask, createTaskPending };
};

// Update task
export const useEditTask = () => {
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return { editTask };
};

// Delete task
export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isPending: deleteTaskPending } = useMutation({
    mutationFn: (taskId) => customFetch.delete(`/${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return { deleteTask, deleteTaskPending };
};
