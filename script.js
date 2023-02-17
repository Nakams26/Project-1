// Sudo code

// Add a variable for li that  I need to display when clicking on the menu
const dynamicLi = document.querySelector('.dynamicMenu');
// Add a variable for the hamburger menu that I put in a div. this is the clickable element
const hamburgerMenu= document.querySelector(".hamburgerMenu");

// Add a a variable for button open
const openMenu = document.querySelector(".menuOpen");

// Add a a variable for button close
const closeMenu = document.querySelector(".menuClose");

//Add a event listener to open menu when the burger menu is clicked 

hamburgerMenu.addEventListener("click", function(){
 // If when you click the burger button, the menu doesn't contain showMenu as class, then I add the class (The class allow us to display the menu form the right).  I also in the same time hide the menu open and display the close menu
      if (!dynamicLi.classList.contains("showMenu")){
        dynamicLi.classList.add("showMenu");
        closeMenu.style.display = "block";
        openMenu.style.display = "none";
      }
    //   // If when you click the burger button, the menu  contain showMenu as class, then I remove the class. This will hide the menu
      else{dynamicLi.classList.remove("showMenu");
      //I also in the same time show the  open menu icon and hide the close menu
      closeMenu.style.display = "none";
      openMenu.style.display = "block";}
});




  





// Add a event listner to close menu when icon sclosed is clicked