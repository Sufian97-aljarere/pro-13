var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validName(){
    var name = document.getElementById("contact-name").value; 

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;       
    }
    if (!name.match(/[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = 'Good';
    return true;
}

function validPhone(){
    var phone = document.getElementById("contact-phone").value; 

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;       
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "Phone should be 10 digits";
        return false;  
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    phoneError.innerHTML = 'Good';
    return true;

}

function validEmail(){
    var email= document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;       
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = 'Good';
    return true;
}

function validMessage(){
    var message= document.getElementById("contact-message").value;
    var required = 25;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + 'more characters required';
        return false; 
    }
    messageError.innerHTML = 'Good';
    return true;
}

function vaildForm(){
    if (!validName() || !validPhone() || !validEmail() || !validMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Check information';
        setTimeout(function(){
            submitError.style.display = 'none';
        },3000);
        return false;
    }
}