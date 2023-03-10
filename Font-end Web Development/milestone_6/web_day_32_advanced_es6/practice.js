const user = {
  id: 1214,
  name: 'Muhammad Shakib Hossain',
  address: {
    street: {
      first: 'Jhilpar Road, Manda',
      second: 'Third floor',
      third: 'Midle side',
    },
    postOffice: 'Kamalapur',
    city: 'Dhaka',
  },
};

const userFloor = user.address;
console.log(userFloor);
