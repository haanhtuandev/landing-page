/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

document.addEventListener('DOMContentLoaded', function() {
  

  const sections = [
    { name: 'Section 1', id: 'section1' },
    { name: 'Section 2', id: 'section2' },
    { name: 'Section 3', id: 'section3' },
  ];

  
  // Get the navbar list
  const navbarList = document.getElementById("navbar__list");


  sections.forEach(section => {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.textContent = section.name;
    navLink.setAttribute('href', `#${section.id}`);
  
    navLink.style.textDecoration = 'none';
    navLink.style.color = 'white';
    navLink.style.fontSize = '25px'
    navbarList.style.backgroundColor = 'black';
  
    navLink.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default behavior of the anchor tag
      const targetId = section.id;
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target element
      }
    });
   
    navItem.appendChild(navLink);
    navbarList.appendChild(navItem);
  });
  
  // Function to highlight the active navigation link
  function highlightActiveNavLink() {
    const scrollPosition = window.scrollY;
    sections.forEach(section => {
      const targetElement = document.getElementById(section.id);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const isInSectionViewport = rect.top <= 150 && rect.bottom >= 150;
        const navLink = document.querySelector(`[href="#${section.id}"]`);
        if (isInSectionViewport) {
          navLink.style.textDecoration = 'underline';
        } else {
          navLink.style.textDecoration = 'none';
        }
      }
    });
  }
  
  // Add an event listener to handle scrolling
  window.addEventListener('scroll', highlightActiveNavLink);
  
  // Initial highlighting when the page loads
  highlightActiveNavLink();
  






  let mybutton = document.getElementById("myBtn");

// When the user scrolls down ...px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 340 || document.documentElement.scrollTop > 340) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

// When the user clicks on the button, scroll to the top of the document

  mybutton.addEventListener('click', function(){
    const targetTopPage = document.querySelector('h1');
    targetTopPage.scrollIntoView({ behavior: 'smooth' });
  });




  var timer = null;
  window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);
        navbarList.style.display = 'none';        
    }
    timer = setTimeout(function() {
          // do something
          navbarList.style.display = 'flex';
    }, 250);
  }, false);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
});

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


