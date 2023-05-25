let counterValue = 0;

const elValue = document.querySelector("#value");
const buttonPlus = document.querySelector('button[data-action="increment"]');
const buttonMinus = document.querySelector('button[data-action="decrement"]');

buttonPlus.addEventListener("click", () => {
  counterValue += 1;
  elValue.textContent = counterValue;
});

buttonMinus.addEventListener("click", () => {
  counterValue -= 1;
  elValue.textContent = counterValue;
});
