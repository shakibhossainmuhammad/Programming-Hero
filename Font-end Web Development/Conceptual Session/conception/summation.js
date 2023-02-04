/*
1 to n
1+2+3+....+n
*/

// let num1 = 1;
// let num2 = 2;

// let sum = 0;

// sum = num1 + num2;
// console.log(sum);
//n=5;
// 1+2+3+4+5;
//n=10;
// 1+2+4+5+7+8+9+10

let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log(sum)

let sum2 = (n * (n + 1) / 2);
console.log('Sum2:', sum)