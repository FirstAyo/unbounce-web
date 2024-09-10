//window.onscroll = function(){stickyNavBar()};

const navBar = document.getElementById('navbar');
const toggleArrow = document.getElementsByClassName('menu-arrow');
const downArrow = document.getElementsByClassName('down');

// let sticky = navBar.offsetTop;

// function stickyNavBar() {
//     if (window.scrollY >= sticky) {
//         navBar.classList.add("sticky");
//     }else {
//         navBar.classList.remove("sticky");
//     }
// }

function toggleArrowUp() {
    downArrow.classList.remove('down');
    downArrow.classList.add('up');
}

// toggleArrow.addeventlistener('click', toggleArrowUp);