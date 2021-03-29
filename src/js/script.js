$(document).ready(function() {
    $('.burger-btn').on('click', function(e) {
        e.preventDefault();
        $('.burger-btn').toggleClass('burger-btn--active');
        $('.header__nav').toggleClass('header__nav--active');

    $('.header__nav').click(function() {
    $('.burger-btn').removeClass('burger-btn--active');
    $('.header__nav').removeClass('header__nav--active');
});
        
    });
    

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });



function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
})});

// TABS

document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    const tabs = () => {

        const portfolioInnerLinks = document.querySelectorAll('.portfolio__inner-link');
        const portfolioInnerImages = document.querySelectorAll('.portfolio__inner-images');

        // храним ссылку на последний активный элемент
        let lastActiveLink = document.getElementById('homeLink');
        let lastActiveBlock = document.getElementById('homeBlock');

        for (let i = 0; i < portfolioInnerLinks.length; i++) {
            portfolioInnerLinks[i].addEventListener('click', () => {
                lastActiveLink.classList.remove('active');
                lastActiveLink = portfolioInnerLinks[i];
                lastActiveBlock.classList.remove('active');
                lastActiveBlock = portfolioInnerImages[i];
                portfolioInnerLinks[i].classList.add('active');
                portfolioInnerImages[i].classList.add('active');
            });
        }
    };

    tabs();
});














