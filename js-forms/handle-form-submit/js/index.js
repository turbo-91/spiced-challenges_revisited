console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const firstName = formElements.firstName.value;
  const age = formElements.age.value;
  const badness = formElements.badness.value;

  const calculateBadness = (firstName, badness) => {
    return age * 1 + badness * 1;
  };

  console.log(data);
  console.log(`The age-badness-sum of ${firstName} is ${calculateBadness(
    firstName,
    badness
  )}
`);
});
