document.getElementById('form-email').addEventListener('submit', function (e) {
    e.preventDefault();
    let errorSpan = document.getElementById('error-msg');
    let emailInput = document.getElementsByClassName('mail')[0];

    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const mail = e.target[0].value;

    if (!mail.match(mailFormat)) {
        emailInput.style.borderColor = 'red';
        errorSpan.style.opacity = '1';
        emailInput.classList.add('visible-margin');
        console.log(emailInput.classList);
    } else {
        emailInput.style.borderColor = 'hsl(223, 100%, 88%)';
        errorSpan.style.opacity = '0';
        emailInput.classList.remove('visible-margin');
    }
});
