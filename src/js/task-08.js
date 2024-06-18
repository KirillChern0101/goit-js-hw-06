const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены!");
    return;
  }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);

  loginForm.reset();
});
