
// createRestaurant returns object with name and menus - menus bfast, lunch, dinner that contain arrays
function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
  return restaurant;
}

function addMenuItem(restaurant, menuItem) {
  // Refactored to use bracket notation 
  for (let i = 0; i < restaurant.menus[menuItem.type].length; i++) {
    if (restaurant.menus[menuItem.type].includes(menuItem)) {
      return restaurant.menus[menuItem.type][i];
    } 
  }
  return restaurant.menus[menuItem.type].push(menuItem);


  // // Check menuItem type to push into correct menu and call includes to see if it's already in the menu
  // if (
  //   menuItem.type === "breakfast" &&
  //   restaurant.menus.breakfast.includes(menuItem) === false
  // ) {
  //   restaurant.menus.breakfast.push(menuItem);
  // } else if (
  //   menuItem.type === "lunch" &&
  //   restaurant.menus.lunch.includes(menuItem) === false
  // ) {
  //   restaurant.menus.lunch.push(menuItem);
  // } else if (
  //   menuItem.type === "dinner" &&
  //   restaurant.menus.dinner.includes(menuItem) === false
  // ) {
  //   restaurant.menus.dinner.push(menuItem);
  // }
}


function removeMenuItem(restaurant, menuItem, menu) {
  // Refactored to use bracket notation
  for (let i = 0; i < restaurant.menus[menu].length; i++) {
    // Compare menuItem param to current menu name then splice the menu element at the index number
    if (menuItem === restaurant.menus[menu][i].name)
      restaurant.menus[menu].splice(i, 1);
    // Return statement for spliced items
      return `No one is eating our ${menuItem} - it has been removed from the ${menu} menu!`;

    // if (menuItem === restaurant.menus.breakfast[i].name) {
    //   restaurant.menus.breakfast.splice(i, 1);
    // // Return statement for spliced items
    //   return `No one is eating our ${menuItem} - it has been removed from the breakfast menu!`;
    // }
    // if (menuItem === restaurant.menus.lunch[i].name) {
    //   restaurant.menus.lunch.splice(i, 1);
    //   return `No one is eating our ${menuItem} - it has been removed from the lunch menu!`;
    // }
    // if (menuItem === restaurant.menus.dinner[i].name) {
    //   restaurant.menus.dinner.splice(i, 1);
    //   return `No one is eating our ${menuItem} - it has been removed from the dinner menu!`;
    // }
  }
  // Add return statement to catch menuItems arguments that aren't in the array
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
}

function checkForFood(restaurant, foodItem) {
  for (let i = 0; i < restaurant.menus[foodItem.type].length; i++) {
    if (foodItem === restaurant.menus[foodItem.type]) {
      return `Yes, we're serving ${foodItem.name} today!`;
    }
  }
    return `Sorry, we aren't serving ${foodItem.name} today.`;
}
module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
  checkForFood
};
