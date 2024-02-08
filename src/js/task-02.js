const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListElement = document.querySelector('ul#ingredients');

const createIngredientElement = ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
};

const htmlIngredients = ingredients.map(createIngredientElement);

ingredientsListElement.append(...htmlIngredients);
