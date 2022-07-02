const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2,
    spaceBetween: 30,
    reverseDirection: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
          },
        720: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        1024: {
          slidesPerView: 3,
          centeredSlides: true,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 2,
        }
      },
  });


  window.addEventListener('scroll', function() {
    if( window.pageYOffset > 200){
    document.querySelector('header').style.backgroundColor = "rgba(40, 40, 40, 0.6)";
    document.querySelector('header').classList.add('js-header-scroll');
    }
    else if (window.pageYOffset < 200){
        document.querySelector('header').style.backgroundColor = "rgba(117, 190, 218, 0)";
        document.querySelector('header').classList.remove('js-header-scroll');
    }
  });