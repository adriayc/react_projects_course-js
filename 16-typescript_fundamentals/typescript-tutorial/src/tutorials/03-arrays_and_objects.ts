// ARRAYS
let prices: number[] = [100, 75, 42];
// prices.push('hello'); // Error

let fruit: string[] = ['apple', 'orange'];

// let emptyValues: [] = ['hello']; // Error
// let empthValues = []; // any[] type
let empthValues: number[] = [];

let names = ['peter', 'susan', 1];

let array: (string | boolean)[] = ['apple', true, 'orange', false];

// Challenge
let temperatures: number[] = [20, 25, 30];
// temperatures.push('hot'); // Error

let colors: string[] = ['red', 'green', 'blue'];
// colors.push(true); // Error

let mixedArray: (number | string)[] = [1, 'two', 3];

// OBJECTS
let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
// car.color = 'blue'; // Error

let car1: { brand: string; year: number } = { brand: 'audi', year: 2023 };

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 10 };
let notebook = { title: 'notebook' };
// readonly - read only property, ? - optional property
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title = 'new book'; // Error

// Challenge
let bike: { brand: string; year: number } = { brand: 'yamaha', year: 2010 };
// bike.year = 'old'; // Error

let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 };
// let laptop2: { brand: string; year: number } = { brand: 'HP' }; // Error

let product1 = { title: 'shirt', price: 20 };
let product2 = { title: 'pants' };
let products: { title: string; price?: number }[] = [product1, product2];
// products.push({ title: 'shoes', price: 'expensive' }); // Error
products.push({ title: 'shoes' });
