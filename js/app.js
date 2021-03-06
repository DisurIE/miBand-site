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

  const burger = document.querySelector('.menu-icon');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('header__nav_active');
  });

  const popup1 = document.querySelector('.popup');

  document.querySelector('.button_red').addEventListener('click', () => {
    popup1.classList.add('active');
  });

  popup1.addEventListener('click', e => {
    let target = e.target;
    if(!target.classList.contains('popup__content')){
      popup1.classList.remove('active');
    }
  });

  document.addEventListener('keydown', e => {
    if(e.which === 27){
      popup1.classList.remove('active');
    }
  });
    const popup2 = document.querySelector('.popup_form');
    document.addEventListener('click', e => {
      let targer = e.target;

      if(targer.classList.contains('popup-open')){
        document.querySelector('.popup_form').classList.add('active');
        document.querySelector('body').classList.add('hidden');
      }

    });
    popup2.addEventListener('click', e => {
      let target = e.target;
      if(target.classList.contains('popup__body')){
        popup2.classList.remove('active');
        document.querySelector('body').classList.remove('hidden');
      }
    });
    document.addEventListener('keydown', e => {
      if(e.which === 27){
        popup2.classList.remove('active');
        document.querySelector('body').classList.remove('hidden');
      }
    });