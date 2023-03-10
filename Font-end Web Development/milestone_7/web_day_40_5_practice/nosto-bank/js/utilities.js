function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  console.log(typeof inputFieldValueString);
  let inputFieldValue = 0;

  if (inputFieldValueString === '') {
    alert('Please pass in a number');
  } else if (typeof inputFieldValueString === 'string') {
    alert('Please pass in a number');
  } else {
    inputFieldValue = parseFloat(inputFieldValueString);
  }
  // if (
  //  ! inputFieldValueString === '' &&
  // *   typeof inputFieldValueString === 'string'
  // ) {
  //   //alert('Please pass in a number');
  // } else {
  //   ?inputFieldValue = parseFloat(inputFieldValueString);
  // }
  inputField.value = '';
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseInt(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
