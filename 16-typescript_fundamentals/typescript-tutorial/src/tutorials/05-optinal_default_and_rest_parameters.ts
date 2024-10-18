// OPTIONAL PARAMETERS
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

// DEFAULT PARAMETERS
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(100);

// REST PARAMETERS
function sum(message: string, ...numbers: number[]): string {
  const double = numbers.map((num) => num * 2);
  console.log(double);

  let total = double.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return `${message}${total}`;
}

let result = sum('The total is: ', 1, 2, 3, 4, 5);
console.log(result);

// "void" RETURN TYPE (FUNCTIONS)
function logMessage(message: string): void {
  console.log(message);
  // return 'Hello world'; // Errror
}

logMessage('Hello, TypeScript');

// Challenge (Union type as Function Parameters)
function processInput(input: string | number): void {
  if (typeof input === 'number') {
    console.log(input * 2);
  } else {
    console.log(input.toUpperCase());
  }
}

processInput(10);
processInput('Hello');
