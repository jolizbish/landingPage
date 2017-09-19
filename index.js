// Input Validation helper functions
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

function getFirstName(string) {
  if (string.includes(' ')) {
    return string.split(' ')[0];
  } else {
    alert('Please enter your first and last name.');
    return;
  }
}

function getLastName(string) {
  return string.split(' ')[1];
}


$(document).ready(function(e) {

  $("form").submit(function(e) {

      e.preventDefault();

      var formData;

      var first = getFirstName($('#name').val());
      var last = getLastName($('#name').val());
      var phone = checkPhone($('#phone').val());
      var email = checkEmail($('#email').val());

      if (first && last && phone && email) {
        // if user data is valid, assign to formData and submit ajax request (callback)
        formData = {
          FormVO:{
            firstName: first,
            lastName: last,
            cellPhone: phone,
            email: email
          }
        };

        console.log('formData: ', formData);

        $.ajax({
          url: 'https://formsws-hilstaging-com-k0mfqqpppw0s.runscope.net/solar',
          type: 'POST',
          dataType: 'json',
          data: formData,
          success: function(response){
            console.log('response: ', response);
          }
        });
      } else {
        // if user data invalid, do not submit request with incomplete data.
        console.log('incomplete form')
      }
  });
});
