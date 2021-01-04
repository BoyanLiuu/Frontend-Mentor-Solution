const share_icon = document.querySelector('.share_icon');
const share_container = document.querySelector('.share_container');

share_icon.addEventListener('click', function () {
    share_icon.classList.toggle('filter_flag');
    share_container.classList.toggle('show');
});
