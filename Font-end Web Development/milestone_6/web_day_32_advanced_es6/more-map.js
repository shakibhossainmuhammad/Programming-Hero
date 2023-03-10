const numbers = [12, 56, 87, 44];
const half = numbers.map((n) => n / 2);
const thirds = numbers.map((n) => n / 3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom brady', 'Tom Solaiman'];
const firstLetters = friends.map((friends) => friends[0]);
// console.log(firstLetters);
const nameLengths = friends.map((friends) => friends.length);
// console.log(nameLengths);

const products = [
  { id: 1, name: 'laptop', price: 4500 },
  { id: 2, name: 'mobile', price: 8500 },
  { id: 3, name: 'watch', price: 3500 },
  { id: 4, name: 'tablet', price: 25000 },
];

// const items = products.map((products) => console.log(products.name));
const items = products.map((products) => products.name);
const price = products.map((p) => p.price);
// console.log(price);

const roots = numbers.map((num) => Math.sqrt(num).toFixed(5));
// console.log(roots);

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 100 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

// console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
// console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]

const arrayLike = {
  length: 5,
  0: 2,
  1: 3,
  2: 4,
  3: 5,
  4: 6,
  5: 7,
  6: 8,
  7: 9,
  8: 10,
  9: 11,
};
// console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));

console.log(
  [1, 4, 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  })
);
