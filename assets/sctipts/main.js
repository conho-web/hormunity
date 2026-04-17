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
