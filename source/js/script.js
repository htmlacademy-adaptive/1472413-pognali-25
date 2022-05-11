let header = document.querySelector('.header');
let headerNav = document.querySelector('.header__nav');
let burger = document.querySelector('.burger');

header.classList.remove('header--no-js');
headerNav.classList.remove('nav--open');

burger.addEventListener('click', function () {
  console.log("1");
  if (!headerNav.classList.contains('nav--open')) {
    headerNav.classList.add('nav--open');
    burger.classList.add('burger--open');
  } else {
    headerNav.classList.remove('nav--open');
    burger.classList.remove('burger--open');
  }
});
