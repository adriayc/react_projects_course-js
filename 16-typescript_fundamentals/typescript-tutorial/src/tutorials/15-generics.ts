// GENERICS
// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ['Apple', 'Banana', 'Mango'];
let array2: Array<number> = [1, 2, 3];

// Functions
// function createString(arg: string): string {
//   return arg;
// }
// function craeteNumber(arg: number): number {
//   return arg;
// }

function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>('Hello world');
const someNumberValue = genericFunction<number>(2);

// Interface
interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: 'Hello world',
  getValue() {
    return this.value;
  },
};

// Async function
// async function someFunc(): Promise<string> {
//   return 'Hello world';
// }
async function someFunc(): Promise<number> {
  return 1234;
}

const result = someFunc();

// Generate Array
function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = createArray<string>(3, 'hello'); // ["hello", "hello", "hello"]
let arrayNumbers = createArray<number>(4, 100); // [100, 100, 100, 100]

console.log(arrayStrings);
console.log(arrayNumbers);

// Multiples variables
function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

// let result2 = pair<number, string>(123, 'hello');
let result2 = pair(123, 'hello');

// const [name, setName] = useState('');
// const [products, setProducts] = useState<Product[]>([])

// Type constraint on the generic type T, generic type ca be either a number or a string.

function processValue<T extends string | number>(value: T): T {
  console.log(value);
  return value;
}

processValue('hello');
processValue(12);
// processValue(true); // Warning

type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: 'ford',
  model: 'mustang',
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: 'shoes',
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: 'peter',
  age: 20,
};

// function printName<T extends Student | Product>(input: T): void {
function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

printName(student);
printName(product);
// printName(car); // Warning

// Default Value
interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};

// const randomStuff: StoreData<any> = {
const randomStuff: StoreData = {
  data: ['random', 1],
};

// Data is located in the data property
const { data } = axios.get(someUrl);

axios.get<{ name: string }[]>(someUrl);

export class Axios {
  get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
}

export interface AxiosResponse<T = any, D = any> {
  data: T;
  status: number;
  statusText: string;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  config: InternalAxiosRequestConfig<D>;
  request?: any;
}
