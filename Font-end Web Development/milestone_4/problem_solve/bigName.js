let names = ['cool', 'hot', 'cooool', 'hooooot'];
let largeName = '';
for (let i = 0; i < names.length; i++) {
  if (names[i].length > largeName.length) {
    largeName = names[i];
  }
}
console.log(largeName);
