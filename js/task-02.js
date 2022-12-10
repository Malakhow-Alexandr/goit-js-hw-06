const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const resultMarcup = ingredients.map((element) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("item");

  const itemTextEl = document.createElement("p");
  itemTextEl.textContent = element;

  listItemEl.append(itemTextEl);
  return listItemEl;
});

listEl.append(...resultMarcup);
