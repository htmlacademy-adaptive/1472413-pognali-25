let header = document.querySelector('.header');
let headerNav = document.querySelector('.header__nav');
let burger = document.querySelector('.burger');
let userList = document.querySelector('.user-list--header');

header.classList.remove('header--no-js');
headerNav.classList.remove('nav--open');

burger.addEventListener('click', function () {
  if (!headerNav.classList.contains('nav--open')) {
    header.classList.add('header--theme-light');
    headerNav.classList.add('nav--open');
    burger.classList.add('burger--open');
    userList.classList.add('user-list--open');
  } else {
    header.classList.remove('header--theme-light');
    headerNav.classList.remove('nav--open');
    burger.classList.remove('burger--open');
    userList.classList.remove('user-list--open');
  }
});
