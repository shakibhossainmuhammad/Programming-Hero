// function reversWords(str) {
//     const words = str.split(' ');
//     const result = [];
//     for (let i = words.length - 1; i >= 0; i--) {
//         const element = words[i];
//         result.push(element);
//     }
//     console.log(result);
// }
// const myString = 'I am a good boy';
// reversWords(myString);

function reversWords(str) {
  const words = str.split(' ');
  const resutl = [];
  for (let i = words.length - 1; i >= 0; i--) {
    const element = words[i];
    resutl.push(element);
  }
  return resutl;
}
const myString = 'I am a good boy';
const reversed = reversWords(myString);
console.log('reversed output: ', reversed);
