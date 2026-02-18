// UNION TYPE
let tax: number | string = 10;
tax = 100;
tax = '$10';

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random'; // Error

// ANY TYPE
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;
for (let book of books) {
  if (book === '1983') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);

// Challenge
let discount: number | string = 20;
discount = '20%';
// discount = true; // Error

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
// orderStatus = 'cancelled'; // Error
