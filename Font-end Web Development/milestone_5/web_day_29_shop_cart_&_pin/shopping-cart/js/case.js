function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById('case-number-field');
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  let newCaseNumber;
  if (isIncrease === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById('case-total');
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
  // 1 Module Overview and shopping cart increase case count

  //   const caseNumberField = document.getElementById('case-number-field');
  //   const caseNumberString = caseNumberField.value;
  //   const previousCaseNumber = parseInt(caseNumberString);
  //   const newCaseNumber = previousCaseNumber + 1;
  //   caseNumberField.value = newCaseNumber;

  //   3 Calculate phone cost using the same shared function

  const newCaseNumber = updateCaseNumber(true);
  //   const caseTotalPrice = newCaseNumber * 59;
  //   const caseTotalElement = document.getElementById('case-total');
  //   caseTotalElement.innerText = caseTotalPrice;
  updateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();
});

document
  .getElementById('btn-case-minus')
  .addEventListener('click', function () {
    // 2 shopping cart handle decrease and update price
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberField.value;
    // const previousCaseNumber = parseInt(caseNumberString);
    // const newCaseNumber = previousCaseNumber - 1;
    // caseNumberField.value = newCaseNumber;

    // 3 Calculate phone cost using the same shared function

    const newCaseNumber = updateCaseNumber(false);
    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText = caseTotalPrice;

    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
  });
