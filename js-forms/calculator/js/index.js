console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;
  const formElements = event.target.elements;
  const numberA = +formElements["numberA"].value;
  const numberB = +formElements["numberB"].value;

  if (formElements["addition"].checked) {
    result = add(numberA, numberB);
  }
  if (formElements["subtraction"].checked) {
    result = subtract(numberA, numberB);
  }
  if (formElements["multiplication"].checked) {
    result = multiply(numberA, numberB);
  }
  if (formElements["division"].checked) {
    if (numberB === 0) {
      result = "Error: Division by zero";
    } else {
      result = divide(numberA, numberB);
    }
  } else {
    result = "Please select an operation";
  }
  resultOutput.textContent = result;
});
