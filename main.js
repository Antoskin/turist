$(document).ready(() => {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.carousel').carousel('next', 3);
    let tit = `ПОИСК ЛУЧШЕГО ТУРА С ВЫЛЕТОМ ИЗ КИЕВА`;
    $('body .new_f-title').text(tit);
})
