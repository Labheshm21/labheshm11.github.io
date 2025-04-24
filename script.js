// script.js
document.getElementById('nav-toggle').addEventListener('click', () => {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
  });
  
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });
  