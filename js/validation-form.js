/**
 * This script is for the contact validation form
 * It check the email and return if it write in lower case
*/

// Get the form
const form = document.querySelector('#form');

// Get the email
const email = document.getElementById('email');

// Get the element that will display the message error
const emailError = document.getElementById('error');

/**
 * When user click on 'submit' button
 * Take the value inside the email field
 * Check if there is any special character and remove it
 * Iterate through the value and check if there is any capital letter
 * Return an error message if true and send the content of the form if not
*/
form.addEventListener('submit', (event) => {
  const emailValue = email.value;
  const emailchecker = emailValue.replace(/[^a-zA-Z]/g, '').split('');
  for (let counter = 0; counter < emailchecker.length; counter += 1) {
    if (emailchecker[counter] === emailchecker[counter].toUpperCase()) {
      emailError.innerText = 'Oops! There is something wrong. Your email must be in lowerCase';
      event.preventDefault();
    }
  }
});