'use strict';

// Мобильное меню

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

function changeState() {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
}

if (navMain && navToggle) {
  navMain.classList.remove('main-nav--nojs');

  navToggle.onclick = function () {
    changeState();
  };

  changeState();
}
