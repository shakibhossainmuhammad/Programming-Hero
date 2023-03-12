const products = [
  { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
  { name: 'phone', price: 7000, brand: 'iPhone', color: 'golden' },
  { name: 'watch', price: 32000, brand: 'casio', color: 'yellow' },
  { name: 'sungalss', price: 32000, brand: 'ribon', color: 'black' },
  { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
];
const brands = products.map((product) => product.brand);
// console.log(brands);
const prices = products.filter((product) => product.price);
// console.log(prices);

// products.forEach((product) => console.log(product));
// products.forEach((product) => console.log(product.color));

products.forEach((product) => {});

// 3. filter
const cheap = products.filter((product) => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter((p) => p.name.includes('n'));
// console.log(specificName);

// 4. find

const special = products.find((p) => p.name.includes('n'));

console.log(special);
