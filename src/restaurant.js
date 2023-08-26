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
  if (
    menuItem.type === "breakfast" &&
    restaurant.menus.breakfast.includes(menuItem) === false
  ) {
    restaurant.menus.breakfast.push(menuItem);
  } else if (
    menuItem.type === "lunch" &&
    restaurant.menus.lunch.includes(menuItem) === false
  ) {
    restaurant.menus.lunch.push(menuItem);
  } else if (
    menuItem.type === "dinner" &&
    restaurant.menus.dinner.includes(menuItem) === false
  ) {
    restaurant.menus.dinner.push(menuItem);
  }
}


function removeMenuItem(restaurant, menuItem) {
  for (let i = 0; i < restaurant.menus.breakfast.length; i++) {
    if (menuItem === restaurant.menus.breakfast[i].name) {
      restaurant.menus.breakfast.splice(i, 1);
      return `No one is eating our ${menuItem} - it has been removed from the breakfast menu!`;
    }
    if (menuItem === restaurant.menus.lunch[i].name) {
      restaurant.menus.lunch.splice(i, 1);
      return `No one is eating our ${menuItem} - it has been removed from the lunch menu!`;
    }
    if (menuItem === restaurant.menus.dinner[i].name) {
      restaurant.menus.dinner.splice(i, 1);
      return `No one is eating our ${menuItem} - it has been removed from the dinner menu!`;
    }
    // else if (!restaurant.menus.breakfast[i].contains(menuItem)) {
    //   return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
    // }
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
  // checkForFood
};
