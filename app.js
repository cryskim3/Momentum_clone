const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  //prevent its default behavior
  event.preventDefault();
  //Hide the input form after the user submit the input
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;

  //store the username into local storage
  //key: username, value: username
  localStorage.setItem("USERNAME_KEY", username);

  paintGreetings(username);
}

function paintGreetings(username) {
  //Edit the innerText of h1 tag with username
  greeting.innerText = `Hello ${username}`;
  //To display the h1 text, remove the assigned CSS class name, which is "hidden"
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("USERNAME_KEY");

//checking the username from local storage
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
