// const friends = [
//   'Joy',
//   'Naim',
//   'Muhammad Shakib Hossain',
//   'Akash',
//   'Abdullah Sayed',
//   'Ashem',
//   'Farhan',
// ];
// function bestFriend(names) {
//   bestFriend = names[0];
//   for (let i = 0; i < names.length; i++) {
//     if (bestFriend.length < names[i].length) {
//       bestFriend = names[i];
//     }
//   }
//   return bestFriend;
// }
// const logestName = bestFriend(friends);
// console.log(logestName);

const friends = [
  'Joy',
  'Naim',
  'Muhammad Shakib Hossain',
  'Akash',
  'Abdullah Sayed',
  'Ashem',
  'Farhan',
];
function bestFriend(names) {
  bestFriend = names[0];
  for (let i = 0; i < names.length; i++) {
    if (bestFriend.length < names[i].length) {
      bestFriend = names[i];
    }
  }
  return bestFriend;
}

const logestName = bestFriend(friends);
console.log(logestName);
