// Show Navigation grom right side

const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle('close');
    menuNav.classList.toggle('show');
}

// Change header backgrapund when scrolling down
const header = document.getElementById('header');

header.addEventListener('click', () => {
    console.log('Header Clicked!');
});