/* 
 function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }

    }
    return largest;
}

const heights = [167, 190, 120, 165, 137, 200];
const tallest = maxInArray(heights)
console.log('tallest person is: ', tallest)

// HomeWork: Writ a function to get the loweast number in an array;


function SmallestNumbers(numbers) {
  let loweast = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element < loweast) {
      loweast = element;
    }
  }
  return loweast;
}

const smallest = [2, 5, 9, 6, 7, 4, 8];
const loweast = SmallestNumbers(smallest);
console.log('Smallest number is: ' + loweast);
*/
