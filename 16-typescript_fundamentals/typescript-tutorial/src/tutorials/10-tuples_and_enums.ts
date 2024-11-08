// TUPLES AND ENUMS
// Tuples
let person: [string, number] = ['adrian', 25];

let date: readonly [number, number, number] = [12, 17, 2001];
// date.push('hello'); // Error
// date.push(34);
// console.log(date);

function getPerson(): [string, number] {
  return ['adrian', 25];
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

// ? optional
let susan: [string, number?] = ['susan'];

// Enums
enum ServerResponseStatus {
  Success = 200,
  Error = 500,
  // Success = 'Success',
  // Error = 'Error',
}

// Object.values(ServerResponseStatus).forEach((value) => {
//   // console.log(value);
//   if (typeof value === 'number') {
//     console.log(value);
//   }
// });

console.log(ServerResponseStatus);

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    // This will not fly with string enum but ok with number
    // result: 'Success', // Error, This is not allowed
    // result: 200, // This is allowed
    data: ['first item', 'second item'],
  };
}

const response = getServerResponse();
console.log(response);

// Challenge
// Define enum
enum UserRole {
  Admin,
  Manager,
  Employee,
}

// Define type alias
type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string]; // Tuple: [email, phone]
};

function createUser(user: User): User {
  return user;
}

const user: User = createUser({
  id: 123,
  name: 'adrian',
  role: UserRole.Admin,
  contact: ['adrian@mail.com', '+519-707-07-070'],
});
console.log(user);
