function getInputFieldValueById(InputFieldId) {
  const inputField = document.getElementById(InputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = '';
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const TextElement = document.getElementById(elementId);
  const TextElementValueString = TextElement.innerText;
  const TextElementValue = parseFloat(TextElementValueString);
  return TextElementValue;
}

function setTextElementValueById(elemented, newValue) {
  const TextElement = document.getElementById(elemented);
  TextElement.innerText = newValue;
}
