const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const list = document.querySelector("#ingredients");
// const liArray = [];

// ingredients.forEach((ingredient) => {
//   const item = document.createElement("li");
//   item.className = "item";
//   item.textContent = ingredient;
//   liArray.push(item);
// });

// list.append(...liArray);

// const ingredientList = document.createElement("li");
// ingredientList.textContent = "Tomatos";
// ingredientList.classList.add("item");
// console.log(ingredientList);

// const ingredientsEl = document.querySelector("#ingredients");
// ingredientsEl.appendChild(ingredientList);
// console.log(ingredientsEl);

const ingredientList = document.querySelector("#ingredients");
const ingredientArray = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.className = "item";
  item.textContent = ingredient;
  ingredientArray.push(item);
});

ingredientList.append(...ingredientArray);
