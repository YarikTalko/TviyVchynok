const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    slidesPerView: "auto",

    spaceBetween: 20,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

});