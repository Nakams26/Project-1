//1. Adding a burger menu in the header for the mobile view

// Add a variable for li that  I need to display when clicking on the menu
const dynamicLi = document.querySelector(".dynamicMenu");
// Add a variable for the hamburger menu that I put in a div. this is the clickable element
const hamburgerMenu = document.querySelector(".hamburgerMenu");

// Add a a variable for button open
const openMenu = document.querySelector(".menuOpen");

// Add a a variable for button close
const closeMenu = document.querySelector(".menuClose");

//Add a event listener to open menu when the burger menu is clicked

hamburgerMenu.addEventListener("click", function () {
  // If when you click the burger button, the menu doesn't contain showMenu as class, then I add the class (The class allow us to display the menu from the right with a transform translate X).  I also in the same time hide the open icon and display the close icon
  if (!dynamicLi.classList.contains("showMenu")) {
    dynamicLi.classList.add("showMenu");
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
  }
  // If when you click the burger button, the menu  already contain showMenu as class, then I remove the class. This will hide the menu
  else {
    dynamicLi.classList.remove("showMenu");
    //I also in the same time show the  open menu icon and hide the close menu
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
  }
});

//2. Opening a new section when clicking on find out more in the second section of index

//Adding a variable for the hidden section
const hiddenSection = document.querySelector(".hiddenSection");

//Adding a variable for the button find out more section
const openButton = document.querySelector(".openButton");

//Adding a variable for the closing button
const closeButton = document.querySelector(".closeButton");

//Add a event listener to display the hidden section when the find out more button is clicked
openButton.addEventListener("click", function (event) {
  // Prevent the page to refresh when I click the button
  event.preventDefault();
  // Display the hidden section
  hiddenSection.style.display = "block";
});

//Add a event listener to close the hidden section when the close button is clicked
closeButton.addEventListener("click", function () {
  // Hide the hidden section
  hiddenSection.style.display = "none";
});

//3. Doing an image caroussel
// Adding a variable for the div that contain all my slides
const carousselContainer = document.querySelector(".carousselContainer");
// Adding a variable for every slides
const slide = document.querySelector(".slideContainer");
// Adding a variable for the next  button
const next = document.querySelector(".next");
// Adding a variable for the previuos button
const previous = document.querySelector(".previous");

//Adding a event listener on the next button
next.addEventListener("click", function () {
  // Adding a variable for the slides width
  const slideWidth = slide.clientWidth;
  // When icon is clicked >>> scroll left of the image width size
  carousselContainer.scrollLeft += slideWidth;
});

//Adding a event listener on the previous button
previous.addEventListener("click", function () {
  const slideWidth = slide.clientWidth;
   // When icon is clicked >>> scroll right of the image width size
  carousselContainer.scrollLeft -= slideWidth;
});


// 4 Creating a new text when clicking on more in the about section

// Adding a variable on the more button
 const more = document.querySelector(".more");
// Adding a variable on the less button
const less = document.querySelector(".less");
// Adding a variable for the div that will receive the new text
const divText = document.querySelector(".aboutArticle");

//Adding an event listner that will create a p element when clicking on more
more.addEventListener("click", function(){
  // When click on more, I create a new P element
  const newText = document.createElement("p");
  // Adding a text content to this element
  newText.textContent = `This is  a new text that explain who is the founder and give us more information about her!`;
  //Adding a class to this element
  newText.classList.add("newText");
  // Adding this eleemnt as a child of the article
  divText.appendChild(newText);
  // Showing less button
   less.style.zIndex= "10";
})

//Adding an event listner that will close the p element when clicking on less

less.addEventListener("click",function(){
  // Defining the new element created as variable
  const newText = document.querySelector(".newText");
  //When less clicked I remove the element
  newText.remove();
    // Hidding less button, showing more button
  less.style.zIndex= "0";
})