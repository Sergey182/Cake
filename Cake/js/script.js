$(document).ready(function () {
    const burgerBtn = $('.burger-btn');
    const headerNav = $('.header__nav');

    burgerBtn.on('click', function (e) {
        e.preventDefault();
        burgerBtn.toggleClass('burger-btn--active');
        headerNav.toggleClass('header__nav--active');

        headerNav.click(function () {
            burgerBtn.removeClass('burger-btn--active');
            headerNav.removeClass('header__nav--active');
        });

    });

    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height === 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        if (support === true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    })

    // TABS

    const tabs = () => {
        const catalogLinks = document.querySelectorAll('.catalog__inner-item');
        const catalogBlocks = document.querySelectorAll('.catalog__inner-cardholder');

        // храним ссылку на последний активный элемент
        let lastActiveLink = document.getElementById('homeLink');
        let lastActiveBlock = document.getElementById('homeBlock');

        for (let i = 0; i < catalogLinks.length; i++) {
            catalogLinks[i].addEventListener('click', () => {
                lastActiveLink.classList.remove('active');
                lastActiveLink = catalogLinks[i];
                lastActiveBlock.classList.remove('active');
                lastActiveBlock = catalogBlocks[i];
                catalogLinks[i].classList.add('active');
                catalogBlocks[i].classList.add('active');
            });
        }
    };

    tabs();
});















