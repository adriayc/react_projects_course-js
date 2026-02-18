// OBJECTS AS PARAMETERS
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

// Alternative
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: 'anna',
};
createStudent(newStudent);

// EXCESS PROPERTY CHECKS
function createStudent2(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent2 = {
  id: 5,
  name: 'anna',
  email: 'anna@gmail.com',
};
createStudent2(newStudent2);
// createStudent2({ id: 1, name: 'bob', email: 'bob@gmail.com' }); // Excess property checks

// Challenge
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): number | string {
  if (typeof input === 'number') {
    // return input * input;
    // return Math.pow(input, 2);
    return input ** 2;
  } else {
    return config.reverse
      ? input.split('').reverse().join('').toUpperCase()
      : input.toUpperCase();
  }
}

console.log(processData(10));
console.log(processData('Hello'));
console.log(processData('Hello, TS', { reverse: true }));
