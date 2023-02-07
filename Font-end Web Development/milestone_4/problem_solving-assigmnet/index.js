// first Problem
function mindGame(number) {
  const multi = number * 3;
  const add = multi + 10;
  const divide = add / 2;
  const sub = divide - 5;
  return sub;
}
const resultMind = mindGame(10);

// second problem
const names = ['Phero'];
function evenOdd(names) {
  let countName = '';
  for (let i = 0; i < names.length; i++) {
    if (names[i].length % 2 === 1) {
      countName = names[i];
      return 'odd';
    } else {
      return 'even';
    }
  }
}
const resultEvenOdd = evenOdd(names);

// Third Problem
function isLGSeven(inputValue) {
  const valueSeven = inputValue - 7;
  if (valueSeven > 7) {
    return valueSeven * 2;
  } else {
    return valueSeven;
  }
}
const result = isLGSeven(15);

// four problem
// This code is more efficient because it eliminates the need for recursion and the function calls that come with it, and instead uses a simple for loop to iterate through the array. This should result in faster execution and less memory usage.
const numbers = [-18, 10, 23, 44, -80, -15, -21, -16, -20];
function findingBadData(numbers) {
  let neg_count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      neg_count++;
    }
  }
  return neg_count;
}

const counts = findingBadData(numbers);

// five problem
function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
  const firstFriendGem = 50;
  const secondFriendGem = 20;
  const thirdFriendGem = 15;

  const firstGemTotal = firstFriend * firstFriendGem;
  const secondGemTotal = secondFriend * secondFriendGem;
  const thirdGemTotal = thirdFriend * thirdFriendGem;

  const totalGem = firstGemTotal + secondGemTotal + thirdGemTotal;
  if (totalGem >= 1000 * 2) {
    return totalGem - 2000;
  } else {
    return totalGem;
  }
}

const totalGemResult = gemsToDiamond(21, 32, 43);
