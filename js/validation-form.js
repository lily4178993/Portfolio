const checkCase = (str) => {
  const isLower = str.toString().toLowerCase();
  if (str === isLower) {
    return true;
  }
  return false;
};
const validate = (email) => {
  email.preventDefault();
  const inputMail = document.getElementById('email').value;
  const form = document.getElementById('form');
  const checkEmail = checkCase(inputMail);
  if (checkEmail === true) {
    form.action = 'https://formspree.io/f/xvonlboj';
    form.submit();
  } else {
    const throwError = document.getElementById('error');
    throwError.innerHTML = 'Please check your email address again. The email input should always be in the lower case.';
  }
};
const form = document.getElementById('form');
form.addEventListener('submit', validate);
