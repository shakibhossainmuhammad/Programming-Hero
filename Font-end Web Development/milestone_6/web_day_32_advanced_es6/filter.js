const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter((numbers) => numbers > 20);
const tiny = numbers.filter((n) => n < 10);
const even = numbers.filter((num) => num % 2 === 0);
// console.log(even);

const products = [
  { id: 1, name: 'laptop', price: 45000 },
  { id: 2, name: 'mobile', price: 85000 },
  { id: 3, name: 'watch', price: 35000 },
  { id: 4, name: 'tablet', price: 25000 },
];

// const expensive = products.filter((products) => products.price > 100);
const expensive = products.filter((products) => products.price < 100);
// console.log(expensive);

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

// const result = words.filter((word) => word.length < 6);
// const result = words.filter((word) => word.length < 10);
// const result = words.filter((word) => word.length < 8);
// const result = words.filter((word) => word.length < 7);
// const result = words.filter((word) => word.length > 10);
// const result = words.filter((word) => word.length > 8);
// const result = words.filter((word) => word.length > 6);
// const result = words.filter((word) => word.length > 9);

// console.log(result);

const mobileApp = [
  'html',
  'css',
  'javascript',
  'react.js',
  'node.js',
  'react native',
];
//filter return multiple values in array

const mobileAppResult = mobileApp.filter((mobileApp) => mobileApp.length > 10);
// console.log(mobileAppResult);

const games = [
  { title: 'Mass Effect', rating: 9.5 },
  { title: 'League of Legends', rating: 5 },
  { title: 'Last of Us', rating: 10 },
  { title: 'God of War', rating: 8.5 },
  { title: 'WWE 2k20', rating: 6 },
];

const game = games.filter((games) => games.rating === 10);
console.log(game);

// console.log(goodGames);
