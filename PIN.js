//check if pin is 4 or 6 digit only
function validatePIN (pin) {
  //return true or false
 if (/^(\d{4}|\d{6})$/.test(pin)) {
    return true;
  } else {
    return false;
  }
  }
