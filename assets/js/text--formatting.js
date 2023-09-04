function formatNumberWithZeros(number, totalDigits) {
  return number.toString().padStart(totalDigits, '0');
}

function formattedNumber(variableNumber) {
  let formatNumberVariable = formatNumberWithZeros(variableNumber, 3);
  let formattedNumber = `${formatNumberVariable}`;
  return formattedNumber
}