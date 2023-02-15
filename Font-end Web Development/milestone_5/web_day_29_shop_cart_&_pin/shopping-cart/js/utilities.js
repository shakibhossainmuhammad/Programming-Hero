function getTextElementValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhoneTotalString);
  return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
  const subtoTalElement = document.getElementById(elementId);
  subtoTalElement.innerText = value;
}

function calculateSubTotal() {
  // calculate total
  const currentPhoneTotal = getTextElementValueById('phone-total');
  const currentCaseTotal = getTextElementValueById('case-total');
  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  //   const subtotalElement = document.getElementById('sub-total');
  //   subtotalElement.innerText = currentSubTotal;
  setTextElementValueById('sub-total', currentSubTotal);

  //   calculate tex
  const texAmountString = (currentSubTotal * 0.1).toFixed(2);
  const texAmount = parseFloat(texAmountString);
  setTextElementValueById('tex-amount', texAmountString);

  const finalAmount = currentSubTotal + texAmount;
  setTextElementValueById('final-total', finalAmount);
}
