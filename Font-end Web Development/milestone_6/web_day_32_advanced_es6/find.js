const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

// const fives = numbers.find((num) => num % 5 === 0);
const fives = numbers.filter((num) => num % 5 === 0);
// console.log(fives);

const products = [
  { id: 1, name: 'laptop', price: 45000 },
  { id: 2, name: 'mobile', price: 85000 },
  { id: 3, name: 'watch', price: 35000 },
  { id: 4, name: 'tablet', price: 25000 },
];

const cheap = products.find((products) => products.price < 30000);
// console.log(cheap);

const mobileApp = [
  'html',
  'css',
  'javascript',
  'react.js',
  'node.js',
  'react native',
];
const mobileAppResult = mobileApp.find((mobileApp) => mobileApp.length > 5);
// console.log(mobileAppResult);

const games = [
  { title: 'Mass Effect', rating: 9.5 },
  { title: 'League of Legends', rating: 5 },
  { title: 'Last of Us', rating: 10 },
  { title: 'God of War', rating: 8.5 },
  { title: 'WWE 2k20', rating: 6 },
];

const gameResult = games.find((games) => games.title.length < 15);
console.log(gameResult);
