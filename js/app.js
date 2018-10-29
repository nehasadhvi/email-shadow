//Variables
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('resetBtn'),
    emailForm = document.getElementById('email-form');

//Event Listeners
document.addEventListener("DOMContentLoaded", appInit);

//Validate the forms
email.addEventListener('blur', validateField);
subject.addEventListener('blur', validateField);
message.addEventListener('blur', validateField);
resetBtn.addEventListener('click', resetForm);

//Functions
function appInit() {
    sendBtn.disabled = true;
}

function validateField() {
    let errors;

    validateLength(this);
    
    //Validate email
    if(this.type == 'email') {
        validateEmail(this);
    }

    //If any error class is available
    errors = document.querySelectorAll('.error');

    //Check if all the fields has input
    if(email.value !== '' && subject.value !== '' && message.value !== '' && errors.length === 0) {
            sendBtn.disabled = false;
    }

}

//Validate the length of the fields
function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

function validateEmail(field) {
    let emailText = field.value;

    if(emailText.indexOf('@') !== -1 && emailText.indexOf('.') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//Clear the whole form when RESET button is clicked
function resetForm() {
    emailForm.reset();
}