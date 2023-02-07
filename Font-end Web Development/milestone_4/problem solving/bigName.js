const names = ['Shakib', 'Joy', 'Abudllah', 'Akash'];
function evenOdd(name) {
  let largeName = '';
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > largeName.length) {
      largeName = names[i];
    }
  }
  return largeName;
}

const outputName = evenOdd(names);
console.log(outputName);
