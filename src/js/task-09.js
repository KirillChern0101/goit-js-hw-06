function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const textSpan = document.querySelector(".color");

changeColorButton.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  textSpan.textContent = color;
});
