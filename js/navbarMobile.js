const $s = document.querySelector.bind(document);
const navbarBtn = $s(".navbar-mobile-btn");
let navbarHeight = $s(".navbar-fixed").clientHeight;
const navbarMobile = $s(".navbar-mobile-menu");
let navbarMobileMenuPosition = $s(".navbar-mobile-menu").style.marginTop = navbarHeight-1+ 'px';

navbarBtn.addEventListener('click' , function() {
    navbarMobile.classList.toggle("open");
})


