import { useDeleteTask, useEditTask } from './reactQueryCustomHooks';

const SingleItem = ({ item }) => {
  const { editTask } = useEditTask();
  const { deleteTask, deleteTaskPending } = useDeleteTask();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
      />

      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => deleteTask(item.id)}
        disabled={deleteTaskPending}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
