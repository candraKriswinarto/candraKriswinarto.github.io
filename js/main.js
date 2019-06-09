// Show Navigation grom right side
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle('close');
    menuNav.classList.toggle('show');
}

// Change header background when scrolling down
const header = document.getElementById('header');

window.onscroll = () => {
    if (document.documentElement.scrollTop >= 70) {
        header.classList.add('showBg');
        
    } else {
        header.classList.remove('showBg');
    }
}


// Smooth Scroll - https://github.com/cferdinandi/smooth-scroll
 const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500
});