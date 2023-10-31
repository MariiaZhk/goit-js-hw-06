// Завдання 2
// HTML містить порожній список ul#ingredients.
// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map((ingredient) => {
  const ingredientsLi = document.createElement("li");
  ingredientsLi.textContent = ingredient;
  ingredientsLi.classList.add("item");
  return ingredientsLi;
});

ingredientsList.append(...ingredientsItems);

console.log(ingredientsList);
