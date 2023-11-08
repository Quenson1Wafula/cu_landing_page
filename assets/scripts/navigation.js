document.addEventListener('DOMContentLoaded', function () {
  const navContainer = document.querySelector('.disapper-nav');
  const hamburgerBtn = document.querySelector('.humbuger-btn');
  const navLinks = document.querySelector('.plasmic-tab-container');
  const mainBody = document.querySelector('.main-body');
  const footer = document.querySelector('.footer');
  const closeDesktop = document.querySelector('.fa-x');
  const xContainer = document.querySelector('.x-container');

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    xContainer.classList.toggle('show');
    if (navContainer) {
      navContainer.classList.toggle('show-nav');
    }
    // if (!xContainer) {
    //   xContainer.classList.toggle('show');
    // }
  });

  closeDesktop.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    if (navContainer) {
      navContainer.classList.toggle('show-nav');
    }
  });
});


