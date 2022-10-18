// emotions Slider
var swiper = new Swiper(".my-swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
    },
});

// best Slider
var swiperBest = new Swiper(".swiper-best", {
    slidesPerView: 1,
    spaceBetween: 10,
    
    centeredSlides: true,
    loop: true,
    
    breakpoints: {
        720: {
            slidesPerView: 1.8,
            spaceBetween: 18,
        },
        1025:{
            slidesPerView: 2.4,
            spaceBetween: 18,
        }
    },
    navigation: {
    nextEl: ".best-btn-next",
    prevEl: ".best-btn-prev",
    },
});

// about Slider
var swiperAbout = new Swiper(".swiper-about", {
    slidesPerView: 1,
    loop: true,
    navigation: {
    nextEl: ".about-btn-next",
    prevEl: ".about-btn-prev",
    },
});