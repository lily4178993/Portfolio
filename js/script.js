const menuIcon = document.getElementById('menu');

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    menuIcon.style.background = 'none';
    menuIcon.style.boxShadow = 'none';
  } else {
    menuIcon.style.background = 'var(--color-white)';
    menuIcon.style.boxShadow = '0 -8px 0 0 var(--color-white), 0 8px 0 0 var(--color-white)';
  }
});
