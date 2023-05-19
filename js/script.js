const menuIcon = document.getElementById('menu');

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    menuIcon.style.display = 'block';
  } else {
    menuIcon.style.display = 'none';
  }
});
