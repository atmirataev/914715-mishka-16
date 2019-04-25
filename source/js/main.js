var siteMenu = document.querySelector('.site-menu');
var userMenu = document.querySelector('.user-menu');
var navToggle = document.querySelector('.page-header__toggle');

navToggle.classList.add('page-header__toggle--closed')

navToggle.addEventListener('click', function () {
    if (siteMenu.classList.contains('site-menu--closed') || userMenu.classList.contains('user-menu--closed')) {
      siteMenu.classList.remove('site-menu--closed');
      userMenu.classList.remove('user-menu--closed');
    } else {
      siteMenu.classList.add('site-menu--closed');
      userMenu.classList.add('user-menu--closed');

    }
});

navToggle.addEventListener('click', function () {
    if (navToggle.classList.contains('page-header__toggle--closed')) {
        navToggle.classList.remove('page-header__toggle--closed');
    } else {
        navToggle.classList.add('page-header__toggle--closed');
    }
});
