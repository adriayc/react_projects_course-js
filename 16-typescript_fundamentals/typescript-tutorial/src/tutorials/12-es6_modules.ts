// ES6 MODULES
import newStudent, { sayHello, person, type Student } from './12-actions';
// import { someValue } from './example.js';

sayHello('TypeScript');
console.log(newStudent);
console.log(person);

const anotherStudent: Student = {
  name: 'bob',
  age: 23,
};

console.log(anotherStudent);
