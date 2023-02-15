// add onclick funtion two
function makeRed() {
  document.body.style.backgroundColor = 'red';
}

// add onclick funtion three
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = function makeBlue() {
  document.body.style.backgroundColor = 'blue';
};

// add  onclick another funtion three

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = 'purple';
};

// add onclick funtion four
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
  document.body.style.backgroundColor = 'pink';
}

// add  onclick another funtion three
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
  document.body.style.backgroundColor = 'green';
});

// add  onclick Final funtion three
// important
document
  .getElementById('make-goldenrod')
  .addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
  });
