function findPositive(numbers) {
    var posituveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element >= 0) {
            posituveNumbers.push(element);
        }
        else {
            return posituveNumbers;
            break;
        }
    }
}
const numbers = [12, -10, 34, 56, 0, -4, -56, 3, 5, 7, -3];
const posNumber = findPositive(numbers);
console.log(posNumber);