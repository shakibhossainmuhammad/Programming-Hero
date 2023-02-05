// function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
//   const perChairWood = 3;
//   const perTableWood = 10;
//   const perBedWood = 50;

//   const chairWood = chairQuantity * perChairWood;
//   const tableWood = tableQuantity * perTableWood;
//   const bedWood = bedQuantity * perBedWood;

//   const totalWood = chairWood + tableWood + bedWood;
//   return totalWood;
// }

// const totalWood = woodCalculator(0, 0, 1);
// console.log('Total wood requred: ', totalWood);

function peperRequirements(book1, book2, book3) {
  const firstBookPage = 100;
  const secondBookPage = 100;
  const thirdBookPage = 100;

  const bookPage1 = book1 * firstBookPage;
  const bookPage2 = book2 * secondBookPage;
  const bookPage3 = book3 * thirdBookPage;

  const totalBookPage = bookPage1 + bookPage2 + bookPage3;
  return totalBookPage;
}

const totalBookPage = peperRequirements(1, 2, 1);
console.log('Total page: ', totalBookPage);
