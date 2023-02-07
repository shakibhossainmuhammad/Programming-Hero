// একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা। 🐱‍👤
// অব্জজেক্টটি / Input দেখতে এমনঃ
// const obj = [
// { name: 'sakib', age: 30 },
// { name: 'samiul', age: 20 },
// { name: 'sahid', age: 50 },
// { name: 'sahid', age: 5 },
// { name: 'samin', age: 10 }
// ]
// function findSmallestPerson(people) {
// let smallestPerson = people[0];
// for (let i = 1; i < people.length; i++) {
// if (people[i].age < smallestPerson.age) {
// smallestPerson = people[i];
// }
// }
// return smallestPerson;
// }
// const obj = [
// { name: 'sakib', age: 30 },
// { name: 'samiul', age: 20 },
// { name: 'sahid', age: 50 },
// { name: 'sahid', age: 5 },
// { name: 'samin', age: 10 }
// ]
// function findSmallObj(person) {
// let smallObj=person[0]
// for (people of person) {
// if (people.age < smallObj.age) {
// smallObj=people
// }
// }
// return smallObj
// }
// findSmallObj(obj)
// console.log(findSmallObj(obj));//{ name: 'sahid', age: 5 }
