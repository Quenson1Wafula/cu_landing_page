document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.querySelector('.humbuger-btn');
    const navMenu = document.querySelector('.nav-menu'); 
  
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      if (navMenu) {
        navMenu.classList.toggle('active');
      }
    });
  });
  