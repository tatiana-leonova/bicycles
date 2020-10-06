'use strict';

// Мобильное меню

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var body = document.querySelector('.body');

function changeStateMenu() {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
}

if (navMain && navToggle) {
  navMain.classList.remove('main-nav--nojs');

  navToggle.onclick = function () {
    changeStateMenu();
    body.classList.toggle('body__js-menu');
  };

  changeStateMenu();
}
