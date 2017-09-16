
function checkPhoneNumber(string) {
  var number = string.split('').filter((char) => !isNaN(parseInt(char)));
  if (number.length < 10 || number.length > 10) {
    alert('Please enter a valid 10-digit phone number.');
  } else {
    return number.join('');
  }
}
