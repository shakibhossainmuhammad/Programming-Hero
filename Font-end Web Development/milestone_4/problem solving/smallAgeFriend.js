// const friends = [
//     { name: 'Shakib', age: 50 },
//     { name: 'joy', age: 35 },
//     { name: 'Khan', age: 25 }
// ]

// function smallAge(friendsAge) {
//     let firstFriends = friends[0];
//     for (let i = 0; i < friends.length; i++) {
//         const element = friends[i];
//         if (firstFriends.age > element.age) {
//             firstFriends = element;
//         }
//     }
//     return firstFriends;
// }

// const result = smallAge(friends);
// console.log(result);

const friends = [
  { name: 'Shakib', age: 50 },
  { name: 'Joy', age: 35 },
  { name: 'Akash', age: 20 },
  { name: 'Khan', age: 24 },
];

function smallAge(friendsAge) {
  let firstFriends = friends[0];
  for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if (firstFriends.age > element.age) {
      firstFriends = element;
    }
  }
  return firstFriends;
}

const result = smallAge(friends);
console.log(result);
