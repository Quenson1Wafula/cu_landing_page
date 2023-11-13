document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay");
  const navContainer = document.querySelector(".disapper-nav");
  const hamburgerBtn = document.querySelector(".humbuger-btn");
  const navLinks = document.querySelector(".plasmic-tab-container");
  const mainBody = document.querySelector(".main-body");
  const footer = document.querySelector(".footer");
  const closeDesktop = document.querySelector(".fa-x");
  const xContainer = document.querySelector(".x-container");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    overlay.classList.toggle("show");
    navContainer.classList.toggle("slidein");
    xContainer.classList.toggle("show");
    if (navContainer&&overlay) {
      navContainer.classList.toggle("show-nav");
    }
  });

  closeDesktop.addEventListener("click", () => {
    
    hamburgerBtn.classList.remove("active");
    overlay.classList.remove("show");
    setTimeout(() => {
      navContainer.classList.toogle("slideOut");
    }, 10);
    if (navContainer) {
      navContainer.classList.toggle("show-nav");
    }
  });
});
