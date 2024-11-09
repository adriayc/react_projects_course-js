// TYPE ASSERTION, TYPE UNKNOWN AND TYPE NEVER
// Type Assertion
let someValue: any = 'this is a string';

// Using type assertion to treat 'someValue' as a string
let strLength: number = (someValue as string).length;

type Bird = {
  name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

// We're sure that the jsonObject is actually a Bird
let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  Pending = 'pending',
  Declined = 'declined',
}

type User = {
  name: string;
  status: Status;
};

// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = 'pending';

const user: User = { name: 'adrian', status: statusValue as Status };

// Type Unknown
let unknownValue: unknown;

unknownValue = 'hello world';
unknownValue = [1, 2, 3];
unknownValue = 42.33455;

// unknownValue.toFixed(2); // Error
if (typeof unknownValue === 'number') {
  unknownValue.toFixed(2);
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('there was error...');
  } else {
    throw 'some error';
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}

// Type Never
// let someValue: never = 0; // Error

type Theme = 'light' | 'dark';

function checkTheme(theme: Theme): void {
  if (theme === 'light') {
    console.log('light theme');
    return;
  }
  // theme; // Type dark
  if (theme === 'dark') {
    console.log('dark theme');
    return;
  }
  theme; // theme is of 'type never', because it can never have a value that is not 'light' or 'dark'.
}

enum Color {
  Red,
  Blue,
  Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return 'Red';
    case Color.Blue:
      return 'Blue';
    case Color.Green:
      return 'Green';
    default:
      // At build time
      let unexpectedColor: never = color;
      // At runtime
      throw new Error(`Unexpected color value: ${color}`);
  }
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green));
