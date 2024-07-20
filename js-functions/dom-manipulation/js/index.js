const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
const greenButton = document.querySelector("[data-js=js-green-button]");
const blueButton = document.querySelector("[data-js=js-blue-button]");
const grayButton = document.querySelector("[data-js=js-gray-button]");

/*
We want to add some functionality to the buttons on this page. When pressing a button, the corresponding color should be applied to the box.
  1: Create a function removeAllColors which removes all color classes from the box.
  2: Create a function addColor which takes a class name as a parameter and adds the class to the box.
  3: Use the two functions in the event listeners of the buttons to color in the box when the button is clicked.
*/

function removeAllColors(box) {
  box.className = "box";
}

function addColor(classname) {
  box.classList.add(`${classname}`);
}

redButton.addEventListener("click", () => {
  removeAllColors(box);
  addColor("red");
  // use your functions to
  // - remove all classes
  // - then add the class name: "red"
});

blueButton.addEventListener("click", () => {
  removeAllColors(box);
  box.classList.add("blue");
  // use your functions to
  // - remove all classes
  // - then add the class name: "blue"
});

greenButton.addEventListener("click", () => {
  removeAllColors(box);
  box.classList.add("green");
  // use your functions to
  // - remove all classes
  // - then add the class name: "green"
});

grayButton.addEventListener("click", () => {
  removeAllColors(box);
  box.classList.add("gray");
  // use your functions to
  // - remove all classes
  // - then add the class name: "gray"
});

// Write your two functions below:
