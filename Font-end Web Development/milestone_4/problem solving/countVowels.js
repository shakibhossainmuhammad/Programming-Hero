function countVowels(sentence) {
  let vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (vowels.indexOf(sentence[i]) !== -1) {
      count++;
    }
  }
  return count;
}
const sentence = 'The quick brown fox jumps over the lazy dog';
console.log(countVowels(sentence));
