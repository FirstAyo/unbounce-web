// const hiddenMenu = document.getElementsByClassName("drop-down-menu-section")[0];
// const solutionHiddenMenu = document.getElementsByClassName("drop-down-menu-section")[1];
// const resourceHiddenMenu = document.getElementsByClassName("drop-down-menu-section")[2];
// const productMenuButton = document.getElementById("product-menu-btn");
// const solutionMenuButton = document.getElementById ("solution-menu-btn");
// const resourceMenuButton = document.getElementById ("resources-menu-btn");

// function toggleSubMenu() {
//   if (hiddenMenu !== null && hiddenMenu !== undefined) {
//     hiddenMenu.classList.toggle('show');
//   } else {
//     console.error('Anchor element is not defined');
//   }
// }

// productMenuButton.addEventListener('mouseover', toggleSubMenu);
// solutionMenuButton.addEventListener('click', toggleSubMenu);
// resourceMenuButton.addEventListener('click', toggleSubMenu);


const productHiddenMenu = document.getElementsByClassName("drop-down-menu-section")[0];
const solutionHiddenMenu = document.getElementsByClassName("drop-down-menu-section")[1];
const resourceHiddenMenu = document.getElementsByClassName("drop-down-menu-section")[2];
const productMenuButton = document.getElementById("product-menu-btn");
const solutionMenuButton = document.getElementById("solution-menu-btn");
const resourceMenuButton = document.getElementById("resources-menu-btn");

function toggleSubMenu(event) {
  
  const targetId = event.target.id;
  let hiddenMenu;

  switch (targetId) {
    case "product-menu-btn":
      hiddenMenu = productHiddenMenu;
      break;
    case "solution-menu-btn":
      hiddenMenu = solutionHiddenMenu;
      break;
    case "resources-menu-btn":
      hiddenMenu = resourceHiddenMenu;
      break;
    default:
      console.error('Unknown button clicked');
      return;
  }

  if (hiddenMenu !== null && hiddenMenu !== undefined) {
    hiddenMenu.classList.toggle('show');
  } else {
    console.error('Anchor element is not defined');
  }
}

productMenuButton.addEventListener('mouseover', toggleSubMenu);
solutionMenuButton.addEventListener('click', toggleSubMenu);
resourceMenuButton.addEventListener('click', toggleSubMenu);