console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const toastMessage = document.createElement("li");
  toastMessage.classList.add("toast-container__message");
  toastMessage.textContent = "I'm a toast message.";
  toastContainer.append(toastMessage);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});