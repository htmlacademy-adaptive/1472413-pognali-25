let header = document.querySelector('.header');
let headerNav = header.querySelector('.header__nav');
let burger = header.querySelector('.burger');
let userList = header.querySelector('.user-list--header');
let logoDark = header.querySelector('.logo__img-dark');
let logoLight = header.querySelector('.logo__img');
let choiceCountry = document.querySelector('.countries-list__choice--third');

let companionDuration = document.getElementById('duration');
let companionDurationInput = document.getElementById('companion-duration');
let durationAdd;
let durationSub;
if (companionDuration != null) {
  durationAdd = companionDuration.querySelector('.actions-list__wrapper-button--plus');
  durationSub = companionDuration.querySelector('.actions-list__wrapper-button--minus');
};

let companionCount = document.getElementById('count');
let companionCountInput = document.getElementById('companion-count');
let companionSub;
let companionAdd;
if (companionCount != null) {
  companionSub = companionCount.querySelector('.actions-list__wrapper-button--minus');
  companionAdd = companionCount.querySelector('.actions-list__wrapper-button--plus');
}

const headerSize = header.offsetHeight;

header.classList.remove('header--no-js');
headerNav.classList.remove('nav--open');
if (choiceCountry != null) choiceCountry.classList.remove('countries-list__choice--open');


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

let modal = (document.querySelector('.modal') != null)? document.querySelector('.modal') : null;
let modalButton = (document.querySelector('.modal__button') != null)? document.querySelector('.modal__button') : null;
let profileButton = (document.querySelector('.profile__button') != null)? document.querySelector('.profile__button') : null;

if (modal != null) modal.classList.remove('modal--open');

/* modal window*/
if (profileButton != null) profileButton.addEventListener('click', function () {
  if (!modal.classList.contains('modal--open')) {
    modal.classList.add('modal--open');
  } else {
    modal.classList.remove('modal--open');
  }
});

if (modalButton != null) modalButton.addEventListener('click', function () {
  if (modal.classList.contains('modal--open')) {
    modal.classList.remove('modal--open');
  }
});

/* counter */
/* companion-count */
let companionCountValue = 2;

if (companionSub != null) companionSub.addEventListener('click', function () {
  ChangeValue(-1);
});
if (companionAdd != null) companionAdd.addEventListener('click', function () {
  ChangeValue(1);
});

function ChangeValue(value) {
  companionCountValue += value;
  if (companionCountValue < 0) {
    companionCountInput.value = 0;
    companionCountValue = 0;
  } else {
    companionCountInput.value = companionCountValue;
  }
}

/* companion-duration */
let companionDurationValue = 3;

if (durationSub != null) durationSub.addEventListener('click', function () {
  ChangeDurationValue(-1);
});
if (durationAdd != null) durationAdd.addEventListener('click', function () {
  ChangeDurationValue(1);
});

function ChangeDurationValue(value) {
  companionDurationValue += value;
  if (companionDurationValue < 0) {
    companionDurationInput.value = 0;
    companionDurationValue = 0;
  } else {
    companionDurationInput.value = companionDurationValue;
  }
}

/* choosing country */
if (choiceCountry != null) choiceCountry.addEventListener('click', function () {
  if (!choiceCountry.classList.contains('countries-list__choice--open')) {
    choiceCountry.classList.add('countries-list__choice--open');
  } else {
    choiceCountry.classList.remove('countries-list__choice--open');
  }
});
