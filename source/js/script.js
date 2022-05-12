let header = document.querySelector('.header');
let headerNav = header.querySelector('.header__nav');
let burger = header.querySelector('.burger');
let userList = header.querySelector('.user-list--header');
let logoDark = header.querySelector('.logo__img-dark');
let logoLight = header.querySelector('.logo__img');
let modal = document.querySelector('.modal');
let modalButton = modal.querySelector('.modal__button');
let profileButton = document.querySelector('.profile__button');

const headerSize = header.offsetHeight;

header.classList.remove('header--no-js');
headerNav.classList.remove('nav--open');
modal.classList.remove('modal--open');

/* scroll */
window.addEventListener('scroll', function () {
  if (window.pageYOffset >= headerSize) {
    header.classList.add('header--theme-light');
    logoDark.style.display = "block";
    logoLight.style.display = "none";
  } else {
    header.classList.remove('header--theme-light');
    if (!headerNav.classList.contains('nav--open')) {
      logoDark.style.display = "none";
      logoLight.style.display = "block";
    }
  }
});

/* burger menu */
burger.addEventListener('click', function () {
  if (!headerNav.classList.contains('nav--open')) {
    header.classList.add('header--theme-light');
    headerNav.classList.add('nav--open');
    burger.classList.add('burger--open');
    userList.classList.add('user-list--open');
    logoDark.style.display = "block";
    logoLight.style.display = "none";
  } else {
    header.classList.remove('header--theme-light');
    headerNav.classList.remove('nav--open');
    burger.classList.remove('burger--open');
    userList.classList.remove('user-list--open');
    logoDark.style.display = "none";
    logoLight.style.display = "block";
  }
});

/* modal window*/
profileButton.addEventListener('click', function () {
  if (!modal.classList.contains('modal--open')) {
    modal.classList.add('modal--open');
  } else {
    modal.classList.remove('modal--open');
  }
});

modalButton.addEventListener('click', function () {
  if (modal.classList.contains('modal--open')) {
    modal.classList.remove('modal--open');
  }
});
