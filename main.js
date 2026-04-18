(function() {
  const initBurgerMenu = () => {
    const burger = document.querySelector(".header__burger");
    const modal = document.querySelector(".header__modal");
    const closeBtn = modal?.querySelector(".header__modal_close");

    if (!burger || !modal) return;

    const toggleModal = (state) => {
      modal.classList.toggle("header__modal_open", state);
      document.body.style.overflow = modal.classList.contains("header__modal_open") ? "hidden" : "";
    };

    burger.addEventListener("click", () => toggleModal());
    closeBtn?.addEventListener("click", () => toggleModal(false));
  };

  const initHeaderScroll = () => {
    const header = document.querySelector('.header__wrapper');
    if (!header) return;

    let isScrolled = false;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50 && !isScrolled) {
        header.classList.add('header--scrolled');
        isScrolled = true;
      } else if (window.scrollY <= 50 && isScrolled) {
        header.classList.remove('header--scrolled');
        isScrolled = false;
      }
    }, { passive: true });
  };

  const initSwiper = () => {
    const swiperContainer = document.querySelector('.mySwiper');
    if (!swiperContainer) return;

    new Swiper(swiperContainer, {
      grabCursor: true,
      initialSlide: 2,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: false,
      effect: "creative",
      creativeEffect: {
        limitProgress: 2,
        prev: {
          translate: ["-115%", 0, -200], 
          scale: 0.9,
        },
        next: {
          translate: ["115%", 0, -200],
          scale: 0.9,
        },
      },
      breakpoints: {
        320: {
          creativeEffect: {
            prev: {
              translate: ["-105%", 0, -200],
              scale: 0.85,
            },
            next: {
              translate: ["105%", 0, -200],
              scale: 0.85,
            },
          },
        },
        468: {
          creativeEffect: {
            limitProgress: 2,
            prev: {
              translate: ["-115%", 0, -200], 
              scale: 0.9,
            },
            next: {
              translate: ["115%", 0, -200],
              scale: 0.9,
            },
          },
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    initHeaderScroll();
    initSwiper();
  });
})();