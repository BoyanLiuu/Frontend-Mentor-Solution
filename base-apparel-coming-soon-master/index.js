document.getElementById('form-email').addEventListener('submit', function (e) {
    e.preventDefault();
    let errorSpan = document.getElementById('error-msg');
    let errorIcon = document.getElementsByClassName('error-icon')[0];
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const mail = e.target[0].value;

    errorSpan.innerHTML = '';

    if (!mail.match(mailFormat)) {
        errorSpan.innerHTML = 'Oops! Please check your email';
        errorIcon.classList.add('flag');

        setTimeout(function () {
            errorIcon.classList.remove('flag');
            errorSpan.innerHTML = '';
        }, 3000);
    }
});
