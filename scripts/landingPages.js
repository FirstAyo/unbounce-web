const hiddenMenu = document.getElementsByClassName("drop-down-menu-section")[0];
const SolutionHiddenMenu = document.getElementsByClassName("drop-down-menu-section")[1];
const productMenuButton = document.getElementById("product-menu-btn");
const solutionMenuButton = document.getElementById ("solution-menu-btn");

function toggleSubMenu() {
  if (hiddenMenu !== null && hiddenMenu !== undefined) {
    hiddenMenu.classList.toggle('show');
  } else {
    console.error('Anchor element is not defined');
  }
}

productMenuButton.addEventListener('mouseover', toggleSubMenu);

solutionMenuButton.addEventListener('click', toggleSubMenu);