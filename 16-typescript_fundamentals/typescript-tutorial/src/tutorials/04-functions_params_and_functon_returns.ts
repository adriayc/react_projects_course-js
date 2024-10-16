// FUNCTIONS PARAMS
// - any
// - config
// - type
// function sayHi(name: any) {}
function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi('adrian');
// sayHi(3); // Error

// FUNCTION RETURNS
function calculateDiscount(price: number): number {
  const hasDiscount = true;

  if (hasDiscount) {
    // return 'Discount applied'; // Error
    return price * 0.9;
  }
  return price;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}

const result = addThree(3);
const someValue = result;

// someValue.myMethod(); // Error (Run time)

// Challenge
const names: string[] = ['adrian', 'john', 'jane', 'jim', 'jill'];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

// const nameToCheck = 'jane';
const nameToCheck = 'peter';

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list`);
} else {
  console.log(`${nameToCheck} is not in the list`);
}
