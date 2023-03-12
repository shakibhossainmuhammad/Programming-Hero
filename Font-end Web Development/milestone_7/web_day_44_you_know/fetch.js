// 1. JSON => stingify, parse

const student = {
  name: 'Salib Khan',
  age: 32,
  movies: ['King Khan', 'Dhakar Mastan'],
};

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObJ = JSON.parse(studentJSON);
// console.log(studentObJ);

// 2. fetch
fetch('url')
  .then((res) => res.json())
  .then((data) => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for

const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach((num) => console.log(num));
numbers.map((num) => num * 2);

// for of on array like object
// loop on an  object using  for in

// add or remove from an array

const products = [
  { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
  { name: 'phone', price: 7000, brand: 'iPhone', color: 'golden' },
  { name: 'watch', price: 32000, brand: 'casio', color: 'yellow' },
  { name: 'sungalss', price: 32000, brand: 'ribon', color: 'black' },
  { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
];

const newProduct = { name: 'webcam', price: 700, bran: 'Lal' };

// copy products array and add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone

const remaining = products.filter((product) => product.name !== 'phone');
