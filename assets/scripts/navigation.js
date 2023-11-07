document.addEventListener('DOMContentLoaded', function () {
    const navContainer = document.querySelector('.disapper-nav');
    const hamburgerBtn = document.querySelector('.humbuger-btn');
    const navLinks = document.querySelector('.plasmic-tab-container');
    const mainBody = document.querySelector('.main-body');
  
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navLinks.classList.toggle('hide');
      mainBody.classList.toggle('hide');
      if (navContainer) {
        navContainer.classList.toggle('show-nav');
      }
    });
  });
  