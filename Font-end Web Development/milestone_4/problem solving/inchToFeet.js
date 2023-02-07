function centiToMeter(inches) {
  const feet = inches / 12;
  return feet;
}

const dadaInches = 144;
const dadaFeet = centiToMeter(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = centiToMeter(nanaInches);
console.log('nana feet', nanaFeet);
