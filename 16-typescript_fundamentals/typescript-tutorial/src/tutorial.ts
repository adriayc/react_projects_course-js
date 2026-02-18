console.log('TypeScript tutorial');

// CLASSES
class Book {
  // Private and Public Modifiers
  // ReadOnly Modifier
  public readonly title: string;
  public author: string;
  // checkedOut: boolean;
  // Default Property
  private checkedOut: boolean = false;
  // checkedOut = false;

  constructor(title: string, author: string) {
    // Instance Property
    this.title = title;
    this.author = author;
    // this.checkedOut = false;
  }

  public checkOut() {
    // this.checkedOut = true;
    this.checkedOut = this.toggleCheckedOutStatus();
  }

  public isCheckedOut() {
    return this.checkedOut;
  }

  private toggleCheckedOutStatus() {
    return !this.checkedOut;
  }
}

const deepWork = new Book('Deep Work', 'Cal Newport');
// deepWork.title = 'something else'; // Error
// deepWork.checkedOut = true;
// deepWork.checkedOut = 'hello world'; // Error
// deepWork.checkOut();
// deepWork.checkOut();
console.log(deepWork); // {title: 'Deep Work', author: 'Cal Newport'}
// console.log(deepWork.title);
// console.log(deepWork.isCheckedOut());

// Shorthand Syntax
class Book2 {
  private checkedOut: boolean = false;

  constructor(
    readonly title: string,
    public author: string,
    private someValue: number
  ) {}

  public getSomeValue() {
    return this.someValue;
  }
}

const deepWork2 = new Book2('Deep Work', 'Cal Newport', 45);
console.log(deepWork2.getSomeValue());

// Getters and Setters
class Book3 {
  private checkedOut: boolean = false;

  constructor(readonly title: string, public author: string) {}

  // Getter
  get info() {
    return `${this.title} by ${this.author}`;
  }

  get checkOut() {
    return this.checkedOut;
  }

  public get someInfo() {
    this.checkOut = true;
    return `${this.title} by ${this.author}`;
  }

  // Setter
  // set checkOut(checkedOut: boolean) {
  //   this.checkedOut = checkedOut;
  // }
  private set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }
}

const deepWork3 = new Book3('Deep Work', 'Cal Newport');
console.log(deepWork3.info); // Call getter fn
// deepWork3.checkOut = 'hello'; // Error
// deepWork3.checkOut = true; // Error (private modifier)
console.log(deepWork3);
console.log(deepWork3.someInfo);
console.log(deepWork3.checkOut);

// Implement Interface
interface IPerson {
  name: string;
  age: number;
  gree(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  gree(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

const hipster = new Person('shakeAndBake', 100);
hipster.gree();
