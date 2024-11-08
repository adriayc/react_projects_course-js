// INTERFACE - ADVANCED
interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

// Merging the interface
interface Person {
  age: number;
}

const person: Person = {
  name: 'adrian',
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

console.log(person.getDetails());

// Extending the interface
interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: 'jane',
  age: 28,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age} and Employee ID: ${this.employeeId}`;
  },
};

console.log(employee.getDetails());

// Interface multiple inheritance
interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: 'bod',
  age: 35,
  dogName: 'rex',
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Name: ${this.dogName}`;
  },
  managePeople() {
    console.log('Managing people...');
  },
};

manager.managePeople();

// Challenge #1
interface Person2 {
  name: string;
}

interface DogOwner2 extends Person {
  dogName: string;
}

interface Manager2 extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

function getEmployee(): Person2 | DogOwner2 | Manager2 {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: 'adrian',
    };
  } else if (random < 0.66) {
    return {
      name: 'sarah',
      dogName: 'rex',
    };
  } else {
    return {
      name: 'bob',
      managePeople() {
        console.log('Managing people...');
      },
      delegateTasks() {
        console.log('Delegate tasks...');
      },
    };
  }
}

const employee2: Person2 | DogOwner2 | Manager2 = getEmployee();
console.log(employee2);
// console.log(employee2.delegateTasks()); // Warning, only exists Manager interface

// Challenge #2
function isManager(obj: Person2 | DogOwner2 | Manager2): obj is Manager2 {
  //Type predicate
  // return typeof obj === 'object'; // It's an obj
  return 'managePeople' in obj;
}

// console.log(isManager(employee2));

if (isManager(employee2)) {
  employee2.delegateTasks();
}
