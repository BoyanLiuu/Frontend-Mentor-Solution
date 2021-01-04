document
    .getElementsByClassName('form-container')[0]
    .addEventListener('submit', function (e) {
        // e.preventDefault();
        let errorSpan = document.getElementById('error-msg');
        const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const mail = e.target[0].value;

        errorSpan.innerHTML = '';

        if (!mail.match(mailFormat)) {
            console.log('x');
            errorSpan.innerHTML = 'Oops! Please check your email';
        }
    });
