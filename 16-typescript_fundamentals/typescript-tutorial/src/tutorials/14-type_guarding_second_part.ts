// TYPE GUARDING - SECOND PART
// Type Predicate
type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: 'adrian', study: () => console.log('Studying') }
    : { name: 'mary', login: () => console.log('Logging in') };
};

// const person = randomPerson();
const person: Person = {
  name: 'anna',
  // study: () => console.log('study...'), // Type never
  login: () => console.log('login...'),
};

function isStudent(person: Person): person is Student {
  // return 'study' in person;
  return (person as Student).study !== undefined;
}

if (isStudent(person)) {
  person.study(); // This is safe because TypeScript knows that 'person' is a Student.
} else {
  // In this case person is type "never"
  person.login();
}

// Discriminated Unions and exhaustive check using the never type
type IncrementAction = {
  type: 'increment';
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: 'decrement';
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {
  switch (action.type) {
    case 'increment':
      return state + action.amount;
    case 'decrement':
      return state - action.amount;
    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action: ${unexpectedAction}`);
  }
}

const newState = reducer(15, {
  type: 'increment',
  user: 'adrian',
  amount: 5,
  timestamp: 123456,
});

// console.log(newState);
