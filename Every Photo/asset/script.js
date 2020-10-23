const navSlide = function () {
    const humberger = document.querySelector('.burger');
    const nav = document.querySelector('.pop-up');


    humberger.addEventListener('click', function () {
        nav.classList.toggle('pop-up-active');
    });
}

navSlide();