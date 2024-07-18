console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(d1, d2) {
  const area1 = (Math.PI * (d1 * d1)) / 4;
  const area2 = (Math.PI * (d2 * d2)) / 4;
  const pizzaGainInPercent = ((area2 - area1) / area1) * 100;
  output.textContent = Math.round(pizzaGainInPercent);
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  const newDisplaySize = (newSize / 24) * 100;
  pizzaElement.style.width = `${newDisplaySize}px`;
}

// Task 3
// define the function updateOutputColor here
