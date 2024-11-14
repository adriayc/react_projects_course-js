import { useState, useEffect } from 'react';
// Types
import { type Task } from './types';
// Components
import Form from './Form';
import List from './List';

// Get LS
function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

// Set LS
function updateStorage(tasks: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function Component() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);

  return (
    <section>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Tasks</h2> */}
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </section>
  );
}

export default Component;
