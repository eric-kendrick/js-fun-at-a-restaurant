
// takeOrder function will use conditional to check if array is less than three and push orders to array
function takeOrder(orders, orderList) {
  if (orderList.length < 3) {
    orderList.push(orders);
    return orderList;
  }
}
// refundOrder will take the refundNum and order array, loop through arr to find which order number equals the argument, then splice it based on its index
function refundOrder(refundNum, orderList) {
  for (let i = 0; i < orderList.length; i++) {
    if (orderList[i].orderNumber === refundNum) {
      orderList.splice(i, 1);
      return orderList;
    }
  }
}
// call map() on argument list with a function that finds the item prop, assign it to a var, then call join() to change to string
function listItems(orderList) {
  var newList = orderList.map(order => order.item);
  var stringList = newList.join(", ");
  return stringList;
}
// use find() equal to the argument, and if it is return true else false
function searchOrder(orderList, order) {
  var isOrder = orderList.find(orderVal => orderVal.item === order);
  if (isOrder) {
    return true;
  } else {
    return false;
  }
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}