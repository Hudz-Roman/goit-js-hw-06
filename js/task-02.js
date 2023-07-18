const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

let liElements = [];

ingredients.forEach((ingredient) => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liElements.push(liEl);
});

ingredientsList.append(...liElements);
