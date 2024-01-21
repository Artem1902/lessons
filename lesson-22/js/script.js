const icon = document.querySelector('.header__burger-top');
icon.addEventListener('click', function () {
  document.documentElement.classList.toggle('top-open');
});

const icon2 = document.querySelector('.header__burger-bottom');
icon2.addEventListener('click', function () {
  document.documentElement.classList.toggle('bottom-open');
});
