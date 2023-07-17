const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

ingredients.forEach((ingredient) => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  ingredientsList.append(liEl);
});
