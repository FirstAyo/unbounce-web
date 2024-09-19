const fromYouDiv = document.getElementById('from-you-div');
const menuDiv = document.getElementById('menu-arrow');

let menuItems = ["Product", "Solutions", "Pricing", "Resources", "Contact"];

// function mainMenuList() {

//     for (const menuItem of menuItems) {

//         const menuAnchorTag = document.createElement('a');

//         menuAnchorTag.textContent = menuItem;
//         let menuTagText = menuAnchorTag.textContent;

//         menuDiv.appendChild(menuTagText);

//         console.log(menuItem);
//         console.log(typeof menuDiv);
//     }

// }

// function mainMenuList() {
  
//     if (!(menuDiv instanceof Element)) {
//       console.error('menuDiv is not a valid DOM element');
//       return;
//     }
  
//     for (const menuItem of menuItems) {
//       const menuAnchorTag = document.createElement('a');
//       menuAnchorTag.textContent = menuItem;
  
//       menuDiv.appendChild(menuAnchorTag); // Append the entire anchor tag, not just the text content
  
//       console.log(menuItem);
//     }
//   }

// mainMenuList();

function addParaAndHeader() {

    const para = document.createElement('p'); // Create a new paragraph element
    const header = document.createElement('h1'); // Create a new header element
  
    // Initialize the elements
    para.textContent = 'Whether you’re curious about features, a free trial, or even press—we’re ready to answer any and all questions.';
    header.textContent = "We’d love to hear from you";

    fromYouDiv.appendChild(header); // Append the header element

    fromYouDiv.appendChild(para); // Append the paragraph element
   
  }

addParaAndHeader();