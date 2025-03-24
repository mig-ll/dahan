const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        400: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },

    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination

    // Navigation arrows
    navigation: {
        nextEl: '#btn-n-right',
        prevEl: '#btn-n-left',
    },
});