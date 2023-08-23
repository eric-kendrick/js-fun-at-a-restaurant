
// Pass menu item name into the function and return a string with the argument
function nameMenuItem(itemName) {
  return `Delicious ${itemName}`;
}

// createMenuItem function takes name, price and type params to build object itemObj with params as properties
function createMenuItem(name, price, type) {
   var itemObj = {
    name: name,
    price: price,
    type: type
   }
   return itemObj;
}
// addIngredients takes params for the ingredient and array. Conditional check .includes() and pushes ingredient to the array
function addIngredients(ingredient, ingredients) {
    if (!ingredients.includes(ingredient)) {
      ingredients.push(ingredient);
      return ingredients;  
    }
}
function formatPrice(initialPrice) {
  console.log(initialPrice);
  var strPrice = initialPrice.toString();
  var formattedPrice = `$${strPrice}`;
  return initialPrice = formattedPrice;
}

function decreasePrice(initialPrice) {
  var tenPercent = initialPrice * .1;
  var decreasedPrice  = initialPrice - tenPercent;
  return decreasedPrice;
}
function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


