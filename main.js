//Preloader Timeout Function
setTimeout(() => {
    document.getElementById("loading").style.display = "none"
}, 2000);

//Mobile menu function
const toggle = document.getElementById('navToggler');
const nav = document.getElementsByClassName('navbar')[0];

function mobileSwitch() {

    if (nav.classList.contains('navbar')) {
        nav.classList.toggle('active');
    }
}
toggle.addEventListener('click', mobileSwitch);

//Page Back to Top
const backToTop = document.getElementById('back-to-top');

function backToTopBtn() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}
backToTop.addEventListener('click', backToTopBtn);