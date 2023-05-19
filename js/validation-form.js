let form = document.querySelector('form');
let email = document.getElementById('email');
let emailError = document.getElementById('error');
let submitButton = document.getElementById('submit');

function hasUpperCase(str) {
    return str.toUpperCase() == str;
}

console.log(hasUpperCase(email.value));

form.addEventListener('submit', () => {
    if (email.validity.valid) {
        if (!hasUpperCase(email.value)) {
            form.action = 'https://formspree.io/f/xvonlboj';
            form.submit();
        }
        
    } else {
        emailError.style.display = 'block';
        emailError.innerHTML = 'Oops! There is something wrong. Your email must be written in lower case'
    }
    
})