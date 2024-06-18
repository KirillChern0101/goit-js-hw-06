const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientItem = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  ingredientItem.push(item);
});

ingredientsList.append(...ingredientItem);
