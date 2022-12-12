const form = document.querySelector("form");

let logedIn = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value != "" && password.value != "") {
    logedIn = { email: email.value, password: password.value };
    console.log(logedIn);
    form.reset();
  } else if (email.value == "" || password.value == "") {
    alert("All windows should be filled in");
  }
});
