const shoppingCart = [
  { name: 'Shoe', price: 500 },
  { name: 'shirt', price: 500 },
  { name: 'pant', price: 500 },
  { name: 'belt', price: 500 },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price;
  }
  return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today: ', expense);
