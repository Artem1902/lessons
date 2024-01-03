const icon = document.querySelector(".header__burger");
icon.addEventListener("click", function () {
  document.documentElement.classList.toggle("menu-open");
});

const iconSearch = document.querySelector(".header__search-icon");
iconSearch.addEventListener("click", function () {
  document.documentElement.classList.toggle("search-open");
});
