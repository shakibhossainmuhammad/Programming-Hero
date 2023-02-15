// first Problem
function mindGame(number) {
  const multi = number * 3;
  const add = multi + 10;
  const divide = add / 2;
  const sub = divide - 5;
  return sub;
}
const resultMind = mindGame(50);
// second problem
const names = ['Batch7'];
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
const result = isLGSeven(6);

// four problem
const numbers = [2, -5, -7, -13];
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
  const firstFriendGem = 21;
  const secondFriendGem = 32;
  const thirdFriendGem = 43;

  const firstGemTotal = firstFriend * firstFriendGem;
  const secondGemTotal = secondFriend * secondFriendGem;
  const thirdGemTotal = thirdFriend * thirdFriendGem;

  const totalGem = firstGemTotal + secondGemTotal + thirdGemTotal;
  if (totalGem >= 1000) {
    return totalGem - 2000;
  } else {
    return totalGem;
  }
}

const totalGemResult = gemsToDiamond(1, 1, 1);
