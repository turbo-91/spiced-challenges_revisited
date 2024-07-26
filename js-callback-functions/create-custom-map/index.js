const numbers = [1, 2, 3, 4, 5];

function double(number) {
  return number * 2;
}

function myMap(numbers, double) {
  let doubledNumbers = [];
  for (const number of numbers) {
    const doubledNumber = double(number);
    doubledNumbers.push(doubledNumber);
  }
  return console.log(doubledNumbers);
}

myMap(numbers, double);
