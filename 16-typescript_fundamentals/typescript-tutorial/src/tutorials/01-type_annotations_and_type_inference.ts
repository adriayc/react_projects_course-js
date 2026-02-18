// TYPE INFERENCE
// String
let awesomeName: string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

// awesomeName = 20; // Error

// Number
let amount: number = 20;
amount = 12 - 1;
// amount = 'pants'; //Error

// Boolean
let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = 'shakeAndBake'; // Error

// TYPE ANNOTATIONS
// String
let greeting: string = 'Hello, TypeScript!';
greeting = greeting.toUpperCase();

// Number
let age: number = 25;
age = age + 5;

// Boolean
let isAdult: boolean = age >= 18;
isAdult = !isAdult;
console.log(isAdult);

// greeting = 10; // Error
// age = 'thirty'; // Error
// isAdult = 'yes'; // Error

console.log(greeting, age, isAdult);
