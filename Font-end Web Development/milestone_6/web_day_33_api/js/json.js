const user = { id: 1, name: 'Gorib Aamir', job: 'Actor' };
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
  owner: 'Alia',
  address: {
    street: 'Kochukhet Voot ar goli',
    city: 'ranbir',
    country: 'Bd',
  },
  products: ['laptop', 'mic', 'monitor', 'keyboard'],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
