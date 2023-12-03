// Toggle class active
const navbarnav = document.querySelector('.navbar-nav');
// ketik hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active');
} 

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
}
})