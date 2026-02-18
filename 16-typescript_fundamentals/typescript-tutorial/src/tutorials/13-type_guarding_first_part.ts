// TYPE GUARDING - FIRST PART
// "typeof" guard
type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

function checkValue(value: ValueType): void {
  if (typeof value === 'string') {
    console.log(value.toLowerCase());
    return;
  }
  if (typeof value === 'number') {
    console.log(value.toFixed(2));
    return;
  }
  console.log(`boolean: ${value}`);
}

checkValue(value);

// check for property
type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//   if (animal.type === 'dog') {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

function makeSound(animal: Animal) {
  if ('bark' in animal) {
    // TypeScript knows that `animal` is a Dog in this block
    animal.bark();
  } else {
    // TypeScript knows that `animal` is a Cat in this block
    animal.meow();
  }
}

// "Truthy"/"Falsy" guard
function printLength(str: string | null | undefined) {
  if (str) {
    // In this block, TypeScript knows that `str` is a string
    // because `null` and `undefined` are falsy values.
    console.log(str.length);
  } else {
    console.log('no string provided');
  }
}

printLength('hello'); // Outputs: 5 (Truthy)
printLength(''); // Outputs: 'no string provided' (Falsy)
printLength(null); // Outputs: 'no string provided' (Falsy)
printLength(undefined); // Outputs: 'no string provided' (Falsy)
printLength(); // Outputs: 'no string provided' (Falsy)

// "instanceof" type guard
try {
  throw 'some error';
  //   throw new Error('This is an error');
} catch (error) {
  if (error instanceof Error) {
    console.log(`Caught an Error object: ${error.message}`);
  } else {
    console.log('unknown error...');
  }
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const random2 = checkInput('2020-05-05');

console.log(year);
console.log(random2);
