// function bestFriend(names) {
//   bestFriend = names[0];
//   for (let i = 0; i < names.length; i++) {
//     if (bestFriend.length < names[i].length) {
//       bestFriend = names[i];
//     }
//   }
//   return bestFriend;
// }
// const friend = [
//   'John',
//   'Justin',
//   'Messi khan pagol men',
//   'Doe khan',
//   'Mike',
//   'Chester',
//   'Kim',
// ];
// console.log(bestFriend(friend));

const friend = [
  'John',
  'Justin',
  'Messi khan pagol men',
  'Doe khan',
  'Mike',
  'Chester',
  'Kim',
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
const logestName = bestFriend(friend);
console.log(logestName);
