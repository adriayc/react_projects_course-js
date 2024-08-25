export const getTotal = (cart) => {
  console.log(cart);
  let totalAmount = 0;
  let totalCost = 0;

  // Loop over the key-value pairs in the map
  // for (let item of cart.values()) {
  for (let { amount, price } of cart.values()) {
    // console.log(item);
    totalAmount += amount;
    totalCost += amount * price;
  }

  return { totalAmount, totalCost };
};
