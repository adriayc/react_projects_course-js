// INTERFACE - FUNDAMENTALS
interface Book {
  readonly isbn: number; // Read only
  title: string;
  author: string;
  genre?: string; // ? - optional
  // Methods
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 123,
  title: 'deep work',
  author: 'cal newport',
  genre: 'self-help', // optional
  // Methods
  // printAuthor() {
  //   console.log(this.author);
  // },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // First option (Regular fn)
  // printSomething: function (someValue) {
  //   return someValue;
  // },
  // Second option (Arrow fn)
  // printSomething: (someValue) => {
  //   // console.log(this); // Catch the global this
  //   console.log(deepWork.author);
  //   return someValue;
  // },
  // Third option
  printSomething(someValue) {
    return someValue;
  },

  printAuthor: () => {
    console.log(deepWork.author);
  },
};

// deepWork.isbn = 'some value'; // Error

deepWork.printAuthor();
const result = deepWork.printTitle('is awesome book');
console.log(result);
console.log(deepWork.printSomething(34));

// Challenge
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number; // ? - optional
  // Methods
  upgradeRam(increase: number): number;
}

const laptop: Computer = {
  id: 1,
  brand: 'random brand',
  ram: 8,
  // Methods
  upgradeRam(increase) {
    this.ram += increase;
    return this.ram;
  },
};

laptop.storage = 256;
console.log(laptop.upgradeRam(4));

console.log(laptop);
