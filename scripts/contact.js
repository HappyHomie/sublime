document.addEventListener('DOMContentLoaded', function () {

    // 1 Home drop-down
    let dropdown = document.querySelector('.nav_submenu');
    let nav_category = document.querySelector('.navigation__category');

    nav_category.style.transition = 'all 0.3s';
    dropdown.addEventListener('mouseover', function () {
        nav_category.style.opacity = '1';
        nav_category.style.top = 'calc(100% + 1px)';
        nav_category.style.visibility = 'visible';

        dropdown.addEventListener('mouseout', function () {
            fadeOut(nav_category)
        })
    })

    // Categories drop-down
    let dropdown2 = document.querySelector('.nav_submenu2');
    let nav_category2 = document.querySelector('.navigation__category2');

    nav_category2.style.transition = 'all 0.3s';
    dropdown2.addEventListener('mouseover', function () {
        nav_category2.style.opacity = '1';
        nav_category2.style.top = 'calc(100% + 1px)';
        nav_category2.style.visibility = 'visible';

        dropdown2.addEventListener('mouseout', function () {
            fadeOut(nav_category2)
        })
    })

    let header = document.querySelector('#header');
    let nav = document.querySelector('#nav')
    let nav__logo = document.querySelector('.nav__logo')

    document.onscroll = (function () {

        if (document.documentElement.scrollTop > 50) {
            nav.classList.add("nav-scrolled");
            header.classList.add("nav-scrolled");
            nav__logo.classList.add("nav__logo-scrolled");
        } else {
            nav.classList.remove("nav-scrolled");
            header.classList.remove("nav-scrolled");
            nav__logo.classList.remove("nav__logo-scrolled");
        }

    });

});

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.bottom == '-80px')
        e.style.bottom = '0';
    else
        e.style.bottom = '-80px';
 }

function fadeOut(nc) {
    nc.style.opacity = '0';
    nc.style.top = 'calc(100% + 20px)';
    nc.style.visibility = 'hidden';
}