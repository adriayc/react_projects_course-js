// console.log('tasks');

import { boolean } from 'zod';

// const btn = document.querySelector<HTMLButtonElement>('.test-btn');
// const btn = document.querySelector<HTMLButtonElement>('.test-btn')!;
// const btn = document.querySelector('.test-btn')! as HTMLButtonElement;

// btn?.addEventListener;
// if (btn) {
//   btn.disabled = true;
// }

// btn.addEventListener;
// btn.disabled = true;

const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');

const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};

// const tasks: Task[] = [];
const tasks: Task[] = loadTasks();

// Get LS
function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

// Iterate  and render task
tasks.forEach(renderTask);

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    // console.log(taskDescription);
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    // Add task to list
    addTask(task);
    // Render tasks
    renderTask(task);
    // Update local storage
    updateStorage();

    formInput.value = '';
    return;
  }
  alert('Please enter a task description');
});

// function createTask(event: SubmitEvent) {
//   event.preventDefault();
//   const taskDescription = formInput?.value;
//   if (taskDescription) {
//     // console.log(taskDescription);
//     formInput.value = '';
//     return;
//   }
//   alert('Please enter a task description');
// }

// taskForm?.addEventListener('submit', createTask);

// Add task
function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

// Render task
function renderTask(task: Task): void {
  const taskElement = document.createElement('li');
  taskElement.textContent = task.description;

  // Checkbox
  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.checked = task.isCompleted;

  // Toggle checkbox
  taskCheckbox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskElement.append(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}

// Set LS
function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
