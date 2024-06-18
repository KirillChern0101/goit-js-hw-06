let counterValue = 0;

const elValue = document.querySelector("#value");
const btnPluss = document.querySelector('button[data-action="increment"]');
const btnMins = document.querySelector('button[data-action="decrement"]');

btnPluss.addEventListener("click", () => {
  counterValue += 10;
  elValue.textContent = counterValue;
});

btnMins.addEventListener("click", () => {
  counterValue -= 10;
  elValue.textContent = counterValue;
});
