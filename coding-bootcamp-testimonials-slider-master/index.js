const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

let index = 0;
display(index);
function display(index) {
    //make sure all the slide display as none at
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    //set first one as display  flex;
    slides[index].style.display = 'flex';
}

function nextSlide() {
    index++;
    if (index > slides.length - 1) {
        index = 0;
    }
    display(index);
}
function prevSlide() {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    display(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
