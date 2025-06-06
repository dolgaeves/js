function cakes(recipe, ingredients) {
  // Ваш код здесь
  if (Object.entries(recipe).length > Object.entries(ingredients).length) {
    return 0;
  }
  let numOfCakes = 0;
  let count = 0;
  for (let key in recipe) {
    if (ingredients[key] / recipe[key] !== undefined) {
      numOfCakes += Math.floor(ingredients[key] / recipe[key]);
      count += 1;
    } else {
      continue;
    }
    return Math.floor(numOfCakes / count);
  }
}
