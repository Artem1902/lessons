const icon = document.querySelector('.header__burger');
icon.addEventListener('click', function () {
  document.documentElement.classList.toggle('burger-open');
});
