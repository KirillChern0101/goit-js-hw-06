const control = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

const handleInput = () => {
  textSize.style.fontSize = `${control.value}px`;
};

control.addEventListener("input", handleInput);
