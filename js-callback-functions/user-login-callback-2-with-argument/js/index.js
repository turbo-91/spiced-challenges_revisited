console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

let userName = "Jane Doe";

function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
}

handleUserLogin(showWelcomeMessage);
handleUserLogin(() =>
  console.log(`Welcome ${userName}! You are logged in now.`)
);
