const burger = document.querySelector(".header__burger");
const modal = document.querySelector(".header__modal");

if (burger && modal) {
  function isOpen() {
    return modal.classList.contains("header__modal_open");
  }

  burger.addEventListener("click", () => {
    if (isOpen()) {
      modal.classList.remove("header__modal_open");
    } else {
      modal.classList.add("header__modal_open");
    }
  });

  const closeBtn = modal.querySelector(".header__modal_close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("header__modal_open");
    });
  }
}

const swiper = new Swiper('.mySwiper', {
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
