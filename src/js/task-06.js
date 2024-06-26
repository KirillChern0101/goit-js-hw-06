const validationInput = document.querySelector("#validation-input");

const requiredLength = parseInt(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", (event) => {
  const inputLength = validationInput.value.length;

  if (inputLength === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
