const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');
const menuItems = document.querySelectorAll(".list-item");


function openClose (){
    navLink.classList.toggle('hide');
}

hamburger.addEventListener('click', openClose);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", openClose);
    }
  )