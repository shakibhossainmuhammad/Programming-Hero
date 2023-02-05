function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + 1;
        console.log(i, sum)
    }
    return sum;
}