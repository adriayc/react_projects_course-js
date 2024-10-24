// TYPES ALIAS
type User = { id: number; name: string; isActive: boolean };
// export type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()}!!!`);

  return user;
}

type StringOrNumber = string | number;

let value: StringOrNumber;
value = 'hello';
value = 123;

type Theme = 'light' | 'dark';

let theme: Theme;
theme = 'dark';
theme = 'light';

function setTheme(t: Theme) {
  theme = t;
}

setTheme('dark');

// Challenge
type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is an manager of ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    );
  }
}

const alice: Employee = { id: 1, name: 'alice', department: 'Sales' };
const steve: Employee = { id: 1, name: 'steve', department: 'HR' };

const bob: Manager = { id: 1, name: 'bob', employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(bob);

// INTERSECTION TYPE
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 1,
  name: 'how to cook a dragon',
  price: 15,
};
const book2: Book = {
  id: 2,
  name: 'the secret life of unicorns',
  price: 18,
};

// const discountBook: Book & { discount: number } = {
const discountBook: DiscountedBook = {
  id: 3,
  name: 'Gnomes vs. Goblins: The Ultimate Guide',
  price: 25,
  discount: 0.15,
};

// Type Alias - Computed Properties
const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };
console.log(tiger);
