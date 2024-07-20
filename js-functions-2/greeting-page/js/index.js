console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  let now = new Date();
  let currentHour = now.getHours();
  if (currentHour >= 6 && currentHour <= 12) return "Good Morning";
  else if (currentHour >= 13 && currentHour <= 18) return "Good Afternoon";
  else if (currentHour >= 19 && currentHour <= 22) return "Good Evening";
  else if (currentHour >= 13 && currentHour <= 5) return "Good Night";
}

function getDayColor() {
  let today = new Date();
  let dayOfWeek = today.getDay();
  if (dayOfWeek > 1 && dayOfWeek < 6) return "lightblue";
  else if (dayOfWeek === 0 || dayOfWeek === 6) return "hotpink";
  else if ((dayOfWeek = 1)) return "darkgray";
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
