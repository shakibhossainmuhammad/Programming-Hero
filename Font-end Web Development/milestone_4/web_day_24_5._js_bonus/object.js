const nayok = {
  name: 'Shakib Khan',
  id: 121,
  address: 'movie cinema',
  isSingle: true,
  friends: ['Apu', 'Raaz', 'Salman', 'aamin'],
  movies: [
    { name: 'no.1', year: 2015 },
    { name: 'King khan', year: 2018 },
  ],
  act: function () {
    console.log('acting like shakib khan');
  },
  car: {
    brand: 'tesla',
    price: 500000000,
    made: 2024,
    manufacturer: {
      name: 'tesla',
      ceo: 'Elon Musk',
      country: 'USA',
    },
  },
};

// console.log(student.car);
console.log(nayok.act);
nayok.act();
