
function checkPhone(string) {
  var number = string.split('').filter((char) => !isNaN(parseInt(char)));
  if (number.length < 10 || number.length > 10) {
    alert('Please enter a valid 10-digit phone number.');
  } else {
    return number.join('');
  }
}

function checkEmail(string) {
  var atIndex = string.indexOf('@');
  var dotIndex = string.indexOf('.');
  if (atIndex > dotIndex || atIndex < 1 || dotIndex < 0 || dotIndex > string.length - 2) {
    alert('Please enter a valid email address.');
  } else {
    return string;
  }
}
