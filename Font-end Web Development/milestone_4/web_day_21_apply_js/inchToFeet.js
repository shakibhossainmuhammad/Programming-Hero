function countString(str, letter) {
  let count = 0;

  // looping through the items
  for (let i = 0; i < str.length; i++) {
    // check if the character is at that position
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);
