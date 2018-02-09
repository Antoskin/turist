$(document).ready(() => {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.carousel').carousel('next', 3);
    $(".button-collapse").sideNav();
    let tit = `ПОИСК ЛУЧШЕГО ТУРА С ВЫЛЕТОМ ИЗ КИЕВА`;
    $('body .new_f-title').text(tit);
    
    /*anchors*/ 
    $('.order-btn a, .card-content a, .blue-line-with-chinese a').click(function(){$('body, html').animate({scrollTop:$('.with-form').offset().top - 50},666)})

})
$('.new_r-container').appendTo('.resultjob');
// $('body').on('DOMNodeInserted', 'new_r-container', function() {
//     console.log('+');
// })
