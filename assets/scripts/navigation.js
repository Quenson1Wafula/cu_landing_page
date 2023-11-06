document.addEventListener('DOMContentLoaded', function () {
    const navContainer = document.querySelector('.disapper-nav');
    const hamburgerBtn = document.querySelector('.humbuger-btn');
  
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      if (navContainer) {
        navContainer.classList.toggle('show-nav');
      }
    });
  });
  