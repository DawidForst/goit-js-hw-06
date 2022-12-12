const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((element) => {
  const list = document.querySelector("#ingredients");
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.textContent = element;

  list.append(newItem);
});
