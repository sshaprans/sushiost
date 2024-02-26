const swiper = new Swiper('.swiper-menu', {
    direction: 'horizontal',
    lazy: true,
    loop: true,
    slidesPerView: 8,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const banner = new Swiper('.banner', {
    direction: 'horizontal',
    lazy: true,
    loop: true,
    speed: 500,
    effect: 'slider',
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const swiperCategory = new Swiper(".swiperCategory", {
    loop: true,
    lazy: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});