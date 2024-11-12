// console.log('tasks');

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

const tasks: Task[] = [];

// taskForm?.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const taskDescription = formInput?.value;
//   if (taskDescription) {
//     console.log(taskDescription);
//     formInput.value = '';
//     return;
//   }
//   alert('Please enter a task description');
// });

function createTask(event: SubmitEvent) {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    console.log(taskDescription);
    formInput.value = '';
    return;
  }
  alert('Please enter a task description');
}

taskForm?.addEventListener('submit', createTask);
