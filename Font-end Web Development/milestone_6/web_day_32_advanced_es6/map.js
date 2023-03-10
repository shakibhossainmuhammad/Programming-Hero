const numbers = [2, 8, 6, 3];

function getDoubled(numbers) {
  const output = [];
  for (const number of numbers) {
    const doubled = doubleIt(number);
    output.push(doubled);
  }
  return output;
}

// function doubleIt(number) {
//   return number * 2;
// }
const doubleIt = (num) => num * 2;

const makeDoulbe = numbers.map(doubleIt);

/*
purpose:
1. get an array
2. for every element of the array do something
3. store the result  in an array
4. return the result array
*/
const result = getDoubled(numbers);
console.log(result);
