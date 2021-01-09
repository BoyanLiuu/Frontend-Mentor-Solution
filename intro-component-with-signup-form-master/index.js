document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let errorMsg = document.getElementsByClassName('error-message');
    let errorIcon = document.getElementsByClassName('error-icon');
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let flag = [false, false, false, false, false];
    for (let i in flag) {
        if (i == 0 || i == 1 || i == 3) {
            if (e.target[i].value === '') {
                flag[i] = true;
                errorMsg[i].classList.add('flag');
                errorIcon[i].classList.add('flag');
            }
        } else if (i == 2) {
            if (!e.target[2].value.match(mailFormat)) {
                flag[2] = true;
                errorMsg[2].classList.add('flag');
                errorIcon[2].classList.add('flag');
            }
        } else {
            break;
        }
    }
    for (let i in flag) {
        if (flag[i] != true) {
            errorMsg[i].classList.remove('flag');
            errorIcon[i].classList.remove('flag');
        }
        if (i == 3) break;
    }
});
